package com.example.banca_online_c21.repositories;

import com.example.banca_online_c21.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    // Método para obtener cuentas por usuario
    List<Account> findByUserId(Integer userId);

    boolean existsByAccountNumber(String accountNumber);
}

