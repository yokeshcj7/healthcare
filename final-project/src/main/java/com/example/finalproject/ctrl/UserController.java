package com.example.finalproject.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalproject.entity.User;
import com.example.finalproject.service.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
@Autowired
UserService userService;
@PostMapping("/addUser")
public User addUser(@RequestBody User user) {
	return userService.addUser(user);
}
@PostMapping("/validateUser")
public boolean validateUser(@RequestBody User user) {
	return userService.validateUser(user);
}
@DeleteMapping("/removeUser")
public User deleteUser(@RequestBody User user) {
	return userService.removeUser(user);
}
@GetMapping("/getUsers")
public List<User> getUsers(){
	return userService.getUsers();
}
}
