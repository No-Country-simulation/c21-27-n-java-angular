package com.example.banca_online_c21.repositories;

import com.example.banca_online_c21.entities.TransactionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionEntity, Long> {

    Optional<TransactionEntity> findByOperationNumber(UUID operationNumber);

    List<TransactionEntity> findBySourceAccount_AccountNumber(String accountNumber);
    List<TransactionEntity> findByDestinationAccount_AccountNumber(String accountNumber);


}
