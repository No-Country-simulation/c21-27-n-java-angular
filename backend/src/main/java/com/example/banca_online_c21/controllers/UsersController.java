package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.entities.Account;
import com.example.banca_online_c21.entities.Users;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private AccountRepository accountRepository; // Asegúrate de tener este repositorio

//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;


    @GetMapping
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

//    @PostMapping
//    public Users createUser(@RequestBody Users user) {
//        return userRepository.save(user);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser (@PathVariable Integer id) {
        // Verificar si el usuario existe
        Optional<Users> userOptional = userRepository.findById(id);
        if (!userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado."); // 404 Not Found
        }

        Users user = userOptional.get();

        // Verificar si el usuario tiene una cuenta asociada
        if (user.getAccounts() != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("No se puede eliminar el usuario porque tiene una cuenta asociada."); // 409 Conflict
        }

        // Eliminar el usuario
        userRepository.delete(user);
        return ResponseEntity.ok("Usuario eliminado con éxito."); // 200 OK
    }

    @PostMapping
    public ResponseEntity<Users> createUser (@RequestBody Users user) {
        // Validaciones simples
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            return ResponseEntity.badRequest().body(null); // Manejo de error
        }
        // Verificar si el nombre de usuario ya existe
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null); // 409 Conflict
        }

        // Guardar el usuario sin hashear la contraseña
        Users savedUser  = userRepository.save(user);

        // Crear una cuenta automáticamente
        Account newAccount;
        do {
            newAccount = new Account();
            newAccount.setAccountNumber(generateRandomAccountNumber());
            newAccount.setUser (savedUser );
            newAccount.setBalance(0.0); // Balance inicial de cero
        } while (accountRepository.existsByAccountNumber(newAccount.getAccountNumber())); // Verificar si la cuenta ya existe

        // Guardar la cuenta
        accountRepository.save(newAccount);

        return ResponseEntity.ok(savedUser );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Integer id) {
        return userRepository.findById(id)
                .map(user -> ResponseEntity.ok().body(user))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{userId}/assign-account")
    public ResponseEntity<String> assignAccountToUser (@PathVariable Integer userId) {
        // Verificar si el usuario existe
        Optional<Users> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado."); // 404 Not Found
        }

        Users user = userOptional.get();

        // Verificar si el usuario ya tiene una cuenta
        if (user.getAccounts() != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya tiene una cuenta asociada."); // 409 Conflict
        }

        // Crear una nueva cuenta
        Account newAccount;
        do {
            newAccount = new Account();
            newAccount.setAccountNumber(generateRandomAccountNumber());
            newAccount.setUser (user);
            newAccount.setBalance(0.0); // Balance inicial de cero
        } while (accountRepository.existsByAccountNumber(newAccount.getAccountNumber())); // Verificar si la cuenta ya existe

        // Guardar la cuenta
        accountRepository.save(newAccount);

        // Asignar la cuenta al usuario
        user.setAccounts(newAccount); // Asegúrate de que el método setAccount esté disponible en tu clase Users
        userRepository.save(user); // Guardar el usuario con la nueva cuenta

        return ResponseEntity.ok("Cuenta asignada al usuario con éxito."); // 200 OK
    }
    // Método para generar un número de cuenta aleatorio
    private String generateRandomAccountNumber() {
        String letters = "JAOB";
        Random random = new Random();
        StringBuilder accountNumber = new StringBuilder();

        // Seleccionar 4 letras aleatorias
        char firstLetter = letters.charAt(random.nextInt(letters.length()));
        char secondLetter = letters.charAt(random.nextInt(letters.length()));
        char thirdLetter = letters.charAt(random.nextInt(letters.length()));
        char fourthLetter = letters.charAt(random.nextInt(letters.length()));

        // Generar 12 dígitos aleatorios
        StringBuilder digits = new StringBuilder();
        for (int i = 0; i < 12; i++) {
            digits.append(random.nextInt(10)); // Dígitos del 0 al 9
        }

        // Construir el número de cuenta
        // Ejemplo de formato: L1 D D D D L2 D D D D L3 D D D D L4
        accountNumber.append(firstLetter); // Letra al inicio
        accountNumber.append(digits.substring(0, 4)); // Primeros 4 dígitos
        accountNumber.append(secondLetter); // Segunda letra
        accountNumber.append(digits.substring(4, 8)); // Siguientes 4 dígitos
        accountNumber.append(thirdLetter); // Tercera letra
        accountNumber.append(digits.substring(8)); // Últimos 4 dígitos
        accountNumber.append(fourthLetter); // Cuarta letra al final

        return accountNumber.toString();
    }
}
