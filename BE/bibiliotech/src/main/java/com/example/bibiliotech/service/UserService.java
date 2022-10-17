package com.example.bibiliotech.service;

import java.util.List;

import com.example.bibiliotech.model.User;

public interface UserService {

//	public User newUser(String email, String username , String password);
	
	public User newUser(User user);

	public void deleteUser(Long id);

	public User updateUser(User user);

	public User findByIdUser(Long idUser);

	public User findByEmail(String email);

	public User findByUsername(String username);

	public List<User> findAllUser();
}
