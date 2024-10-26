package com.example.banca_online_c21.services;

import com.example.banca_online_c21.DTO.TransferRequest;
import com.example.banca_online_c21.entities.TransactionEntity;
import jakarta.servlet.http.HttpServletResponse;
import javax.security.auth.login.AccountNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface ITransactionService {

    List<TransactionEntity> getAll();

    TransactionEntity findById(Long id);

    void delete(Long id);

    void generatePdf(UUID operationNumber, HttpServletResponse response) throws IOException;

    void transferFunds(TransferRequest transferRequest) throws AccountNotFoundException; // Agrega esta línea

    List<TransactionEntity> findByAccountNumber(String accountNumber);

}
