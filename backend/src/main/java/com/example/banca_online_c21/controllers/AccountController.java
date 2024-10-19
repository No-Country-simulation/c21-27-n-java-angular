package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.entities.Account;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.repositories.UsersRepository;
import com.example.banca_online_c21.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    @GetMapping("/user/{userId}")
    public List<Account> getAccountsByUserId(@PathVariable Integer userId) {
        return accountRepository.findByUserId(userId);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<Account> getAccountById(@PathVariable String accountNumber) {
        return accountRepository.findById(accountNumber)
                .map(account -> ResponseEntity.ok().body(account))
                .orElse(ResponseEntity.notFound().build());
    }

    //    // Método para eliminar una cuenta
    @DeleteMapping("/{accountNumber}")
    public ResponseEntity<String> deleteAccount(@PathVariable String accountNumber) {
        try {
            accountService.deleteAccount(accountNumber);
            return ResponseEntity.ok("Cuenta eliminada con éxito.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage()); // Retorna 404 si la cuenta no existe
        }
    }
}
