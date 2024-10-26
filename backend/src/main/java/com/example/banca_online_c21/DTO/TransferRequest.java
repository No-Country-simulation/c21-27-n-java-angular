package com.example.banca_online_c21.DTO;

import lombok.Data;

@Data
public class TransferRequest {
    private String sourceAccount;      // Número de cuenta de origen
    private String destinationAccount; // Número de cuenta destino
    private Double amount;             // Monto a transferir
    private String description;        // Descripción de la transferencia
}
