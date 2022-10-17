package com.example.bibiliotech.service.implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibiliotech.exception.ResourceNotFoundException;
import com.example.bibiliotech.model.User;
import com.example.bibiliotech.repository.UserRepository;
import com.example.bibiliotech.service.UserService;

@Service
public class UserServiceImplement implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public User newUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public User updateUser(User user) {
		User k = userRepository.findByIdUser(user.getIdUser());
		if(k.getEmail() != user.getEmail()) {
			k.setEmail(user.getEmail());
		}
		if(k.getUsername() != user.getUsername()) {
			k.setUsername(user.getUsername());
		}
		if(k.getPassword() != user.getPassword()) {
			k.setPassword(user.getPassword());
		}
		if(k.getIsPremium()!= user.getIsPremium());{
			k.setIsPremium(user.getIsPremium());
		}
		if(k.getIsAdmin()!= user.getIsAdmin());{
			k.setIsAdmin(user.getIsAdmin());
		}

		return userRepository.save(k);
	}

//	@Override
//	public User newUser(String email, String username, String password) {
//		User c = new User();
//		c.setEmail(email);
//		c.setUsername(username);
//		c.setPassword(password);
//		return userRepository.save(c);
//	}

	@Override
	public void deleteUser(Long id) {
		try {
			userRepository.deleteById(id);
		}
		catch(Exception e) {
			System.out.println("User not found");			
		}
	}

	@Override
	public User findByIdUser(Long idUser) {
		return userRepository.findByIdUser(idUser);
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public List<User> findAllUser() {
		return userRepository.findAll();
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

}
