package com.example.banca_online_c21.services;

import com.example.banca_online_c21.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Transactional
    public void deleteAccount(String accountNumber) {
        if (!accountRepository.existsById(accountNumber)) {
            throw new RuntimeException("Cuenta no encontrada"); // Manejo de error si la cuenta no existe
        }
        accountRepository.deleteById(accountNumber);
    }
}
