package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.DTO.TransferRequest;
import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.services.ITransactionService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.AccountNotFoundException;
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
    // Endpoint para realizar una transferencia entre cuentas
    @PostMapping("/transfer")
    public ResponseEntity<String> transferFunds(@RequestBody TransferRequest transferRequest) {
        try {
            transactionService.transferFunds(transferRequest);
            return ResponseEntity.ok("Transferencia realizada con éxito.");
        } catch (AccountNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cuenta no encontrada.");
        } catch (RuntimeException e) {
            // Aquí puedes verificar si el mensaje de la excepción es sobre fondos insuficientes
            if (e.getMessage().equals("Fondos insuficientes en la cuenta de origen.")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Fondos insuficientes en la cuenta de origen.");
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en la transferencia.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en la transferencia.");
        }
    }


}
