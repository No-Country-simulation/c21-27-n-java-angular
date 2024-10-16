package com.example.banca_online_c21.services;

import com.example.banca_online_c21.entities.TransactionEntity;

import java.util.List;
import java.util.Optional;

public interface ITransactionService {

    List<TransactionEntity> getAll();

    TransactionEntity findById(Long id);

    void delete(Long id);
}
