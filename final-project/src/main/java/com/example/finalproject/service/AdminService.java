package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.User;
import com.example.finalproject.repository.AdminRepository;
@Service
public class AdminService {
@Autowired
AdminRepository adminRepository;
	public User register(User user) {
		// TODO Auto-generated method stub
		user.setRole("admin");
		return adminRepository.save(user);
	}
	public List<User> getAdmin() {
		// TODO Auto-generated method stub
		List<User> container=new ArrayList<User>();
				container=adminRepository.findAll();
				List<User>res=new ArrayList<User>();
		for(User u:container) {
			if(u.getRole().equals("admin")){
				res.add(u);
			}
		}
		return res;
	}
	public boolean validateAdmin(User user) {
		// TODO Auto-generated method stub
		String username=user.getUserName();
		List<User> container=new ArrayList<User>();
		container=adminRepository.findAll();
		for(User u:container) {
			if(u.getUserName().equals(user.getUserName())) {
				if(u.getPassword().equals(user.getPassword())) {
					return true;
				}
			}
		}
		return false;
	}

}
