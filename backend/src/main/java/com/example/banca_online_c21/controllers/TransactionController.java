package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.dtos.TransferRequest;
import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.services.ITransactionService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.AccountNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
@Validated
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

    // Endpoint para obtener transferencias por número de cuenta
    @GetMapping("/account/{accountNumber}")
    public ResponseEntity<?> getTransactionsByAccountNumber(@PathVariable String accountNumber) {
        List<TransactionEntity> transactions = transactionService.findByAccountNumber(accountNumber);

        if (transactions.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No hay transacciones para la cuenta: " + accountNumber);
        }

        return ResponseEntity.ok(transactions);
    }

    @GetMapping("receipt/{operationNumber}/pdf")
    void generatePdf(@PathVariable UUID operationNumber, HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        this.transactionService.generatePdf(operationNumber, response);
    }

    @PostMapping("/transfer")
    public ResponseEntity<String> transferFunds(@Valid @RequestBody TransferRequest transferRequest) throws AccountNotFoundException {
        transactionService.transferFunds(transferRequest);
        return ResponseEntity.ok("Transferencia realizada con éxito.");
    }


}
