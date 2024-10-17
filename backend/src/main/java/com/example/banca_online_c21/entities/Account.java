package com.example.banca_online_c21.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Accounts")
@Getter
@Setter
public class Account {
    @Id
    @Column(name = "account_number", nullable = false, length = 20)
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private Users user;

    @Column(name = "balance", nullable = false)
    private Double balance;

    // Getters y Setters
}
