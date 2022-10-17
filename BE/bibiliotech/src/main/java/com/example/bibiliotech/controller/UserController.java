package com.example.bibiliotech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bibiliotech.model.User;
import com.example.bibiliotech.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/update")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}

//	@PostMapping("/create")
//	public User newUser(@RequestParam String email, String username, String password) {
//		return userService.newUser(email, username, password);
//	}
	
	@PostMapping("/create")
	public User newUser(@RequestBody User user) {
		return userService.newUser(user);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable(value="id") Long id) {
		userService.deleteUser(id);
	}

	@GetMapping("/find/{id}")
	public User findByIdUser(@PathVariable(value="id") Long idUser) {
		return userService.findByIdUser(idUser);
	}

	@GetMapping("/find/email/{email}")
	public User findByEmail(@PathVariable(value="email") String email) {
		return userService.findByEmail(email);
	}
	@GetMapping("/find/username/{username}")
	public User findByUsername(@PathVariable(value="username")String username) {
		return userService.findByUsername(username);
	}

	@GetMapping("/find/all")
	public List<User> findAllUser(){
		return userService.findAllUser();
	}

}
