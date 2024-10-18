package com.example.banca_online_c21.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TransactionEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String destinationAccount;
    private Double amount;
    private String description;
    private LocalDateTime date;
    private UUID operationNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "source_account")
    private Account account;
}
