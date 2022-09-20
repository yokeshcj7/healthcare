package com.example.finalproject.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalproject.entity.User;
import com.example.finalproject.service.AdminService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AdminController {
@Autowired
AdminService adminService;
@PostMapping("/register")
public User registerAdmin(@RequestBody User user) {
	return adminService.register(user);
}
@PostMapping("/validateAdmin")
public boolean validateAdmin(@RequestBody User user) {
	return adminService.validateAdmin(user);
}
@GetMapping("/getAdmin")
public List<User> getAdmin(){
	return adminService.getAdmin();
}
}
