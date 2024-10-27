package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.config.JwtUtil;
import com.example.banca_online_c21.dtos.responses.AuthenticationResponse;
import com.example.banca_online_c21.dtos.requests.AuthenticationRequest;
import com.example.banca_online_c21.entities.Users;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            // Enviar un mensaje de error en caso de credenciales incorrectas
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect username or password");

        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        // Obtener el usuario para buscar sus cuentas
        Users user = usersRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Obtener las cuentas asociadas al usuario
        var account = accountRepository.findByAccountNumber(user.getAccounts().getAccountNumber()).orElseThrow();
        return ResponseEntity.ok(new AuthenticationResponse(jwt, account.getAccountNumber()));
    }
}
