package com.example.banca_online_c21.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "source_account", referencedColumnName = "account_number") // Cambia esto según sea necesario
    private Account sourceAccount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "destination_account", referencedColumnName = "account_number")
    // Cambia esto según sea necesario
    private Account destinationAccount;

    private Double amount;
    private String description;
    private LocalDateTime date;

    //    @PrePersist
//    protected void onCreate() {
//        this.date = LocalDateTime.now(); // Se inicializa la fecha de la transacción al momento de persistir
//    }
//
//    // UUID generado automáticamente
//    private UUID operationNumber;
//
//    @PostLoad
//    protected void generateOperationNumber() {
//        this.operationNumber = UUID.randomUUID();
//        System.out.println("Generated Operation Number: " + this.operationNumber);
//
//    }
    @Column(name = "operation_number", nullable = false, unique = true)
    private UUID operationNumber;

    @PrePersist
    protected void onCreate() {
        this.date = LocalDateTime.now(); // Inicializa la fecha de la transacción al momento de persistir
        this.operationNumber = UUID.randomUUID(); // Genera el UUID antes de persistir
        System.out.println("Generated Operation Number: " + this.operationNumber);
    }

}

