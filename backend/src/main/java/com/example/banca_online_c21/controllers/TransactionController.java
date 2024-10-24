package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.services.ITransactionService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("receipt/{operationNumber}/pdf")
    void generatePdf(@PathVariable UUID operationNumber, HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        this.transactionService.generatePdf(operationNumber, response);
    }

}
