package com.example.banca_online_c21.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionResponse implements Serializable {
    private UUID operationNumber;
    private String sourceAccount;
    private String destinationAccount;
    private Double amount;
    private String description;
    private LocalDateTime date;
}
