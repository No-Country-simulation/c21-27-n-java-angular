package com.example.banca_online_c21.controllers;

import com.example.banca_online_c21.entities.Account;
import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.repositories.AccountRepository;
import com.example.banca_online_c21.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    @GetMapping("/user/{userId}")
    public List<Account> getAccountsByUserId(@PathVariable Integer userId) {
        return accountRepository.findByUserId(userId);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<Account> getAccountById(@PathVariable String accountNumber) {
        return accountRepository.findById(accountNumber)
                .map(account -> ResponseEntity.ok().body(account))
                .orElse(ResponseEntity.notFound().build());
    }

    //    // Método para eliminar una cuenta
    @DeleteMapping("/{accountNumber}")
    public ResponseEntity<String> deleteAccount(@PathVariable String accountNumber) {
        try {
            accountService.deleteAccount(accountNumber);
            return ResponseEntity.ok("Cuenta eliminada con éxito.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage()); // Retorna 404 si la cuenta no existe
        }
    }

    @GetMapping("balance/{accountNumber}")
    public ResponseEntity<Map<String, Double>> getBalance(@PathVariable String accountNumber) {
        Map<String, Double> balance = new HashMap<>();
        var account = this.accountRepository.findByAccountNumber(accountNumber).orElseThrow();
        balance.put("balance", account.getBalance());
        return ResponseEntity.ok(balance);
    }

    @GetMapping("transactions/{accountNumber}")
    public ResponseEntity<Map<String, List<TransactionEntity>>> getTransactions(@PathVariable String accountNumber) {
        Map<String, List<TransactionEntity>> transactions = new HashMap<>();
        var account = this.accountRepository.findByAccountNumber(accountNumber).orElseThrow();
        transactions.put("transactions", account.getTransactions());
        return ResponseEntity.ok(transactions);
    }

}
