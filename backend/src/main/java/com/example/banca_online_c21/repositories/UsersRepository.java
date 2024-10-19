package com.example.banca_online_c21.repositories;

import com.example.banca_online_c21.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    boolean existsByUsername(String username);

    Optional<Users> findByUsername(String username);
}
