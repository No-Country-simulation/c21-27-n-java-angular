package com.example.banca_online_c21.dtos.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BalanceUpdateRequest {
    private String accountNumber;
    private Double amount;

    // Getters y Setters

}

