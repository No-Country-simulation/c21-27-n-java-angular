package com.example.banca_online_c21.dtos.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationRequest {
    private String username;
    private String password;

    // Getters y setters
}
