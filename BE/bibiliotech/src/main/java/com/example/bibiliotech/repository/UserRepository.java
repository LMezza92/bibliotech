package com.example.bibiliotech.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bibiliotech.model.User;

@Repository
public interface UserRepository extends JpaRepository < User ,Long >{

	public User findByIdUser(Long idUser);

	public User findByEmail(String email);

	public User findByUsername(String username);
}
