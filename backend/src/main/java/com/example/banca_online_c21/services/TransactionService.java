package com.example.banca_online_c21.services;

import com.example.banca_online_c21.entities.TransactionEntity;
import com.example.banca_online_c21.repositories.TransactionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TransactionService implements ITransactionService {

    private final TransactionRepository repository;

    @Override
    public List<TransactionEntity> getAll() {
        return repository.findAll();
    }

    @Override
    public TransactionEntity findById(Long id) {
        var fromDB = repository.findById(id).orElseThrow();
        return fromDB;
    }


    @Override
    public void delete(Long id) {
        var fromDB = repository.findById(id).orElseThrow();
        this.repository.delete(fromDB);
    }
}
