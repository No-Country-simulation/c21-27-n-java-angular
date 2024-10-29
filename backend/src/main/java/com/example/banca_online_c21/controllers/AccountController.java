package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.dtos.requests.BalanceUpdateRequest;
import com.example.banca_online_c21.dtos.responses.AccountResponse;
import com.example.banca_online_c21.dtos.responses.TransactionResponse;
import com.example.banca_online_c21.entities.Account;
import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.services.AccountService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<AccountResponse> getAllAccounts() {
        return accountRepository.findAll().stream().map(this::entityToResponse).toList();
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    @GetMapping("/user/{userId}")
    public List<AccountResponse> getAccountsByUserId(@PathVariable Integer userId) {
        return accountRepository.findByUserId(userId).stream().map(this::entityToResponse).toList();
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<AccountResponse> getAccountById(@PathVariable String accountNumber) {
        return accountRepository.findById(accountNumber)
                .map(account -> ResponseEntity.ok().body(this.entityToResponse(account)))
                .orElse(ResponseEntity.notFound().build());
    }

    //    // Metodo para eliminar una cuenta
    @DeleteMapping("/{accountNumber}")
    public ResponseEntity<String> deleteAccount(@PathVariable String accountNumber) {
        try {
            accountService.deleteAccount(accountNumber);
            return ResponseEntity.ok("Cuenta eliminada con éxito.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage()); // Retorna 404 si la cuenta no existe
        }
    }

    @GetMapping("/balance/{accountNumber}")
    public ResponseEntity<Map<String, Double>> getBalance(@PathVariable String accountNumber) {
        Map<String, Double> balance = new HashMap<>();
        var account = this.accountRepository.findByAccountNumber(accountNumber).orElseThrow();
        balance.put("balance", account.getBalance());
        return ResponseEntity.ok(balance);
    }

    @GetMapping("transactions/{accountNumber}")
    public ResponseEntity<List<TransactionResponse>> getTransactions(@PathVariable String accountNumber) {
        var account = this.accountRepository.findByAccountNumber(accountNumber).orElseThrow();
        return ResponseEntity.ok(account.getTransactions().stream().map(this::entityToRes).toList());
    }

    @PostMapping("/balance")
    public ResponseEntity<String> addBalance(@RequestBody BalanceUpdateRequest balanceUpdateRequest) {
        try {
            // Validar que el monto sea positivo
            if (balanceUpdateRequest.getAmount() <= 0) {
                return ResponseEntity.badRequest().body("El monto debe ser mayor que cero.");
            }

            // Buscar la cuenta
            Account account = accountRepository.findByAccountNumber(balanceUpdateRequest.getAccountNumber())
                    .orElseThrow(() -> new RuntimeException("Cuenta no encontrada"));

            // Actualizar el balance
            account.setBalance(account.getBalance() + balanceUpdateRequest.getAmount());
            accountRepository.save(account);

            return ResponseEntity.ok("Balance actualizado con éxito.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el balance.");
        }
    }

    private AccountResponse entityToResponse(Account entity) {
        var response = new AccountResponse();
        BeanUtils.copyProperties(entity, response);
        response.setUserId(entity.getUser().getId().toString());
        return response;
    }

    private TransactionResponse entityToRes(TransactionEntity entity) {
        var response = new TransactionResponse();
        BeanUtils.copyProperties(entity, response);
        response.setSourceAccount(entity.getSourceAccount().getAccountNumber());
        response.setDestinationAccount(entity.getDestinationAccount().getAccountNumber());
        return response;
    }


}
