package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.services.ITransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final ITransactionService transactionService;

    @GetMapping
    List<TransactionEntity> getAll() {
        return this.transactionService.getAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<TransactionEntity> getById(@PathVariable Long id) {
        return ResponseEntity.ok(this.transactionService.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Long id) {
        this.transactionService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
