package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.User;
import com.example.finalproject.repository.UserRepository;

@Service
public class UserService {
@Autowired
UserRepository userRepository;
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}
	public boolean validateUser(User user) {
		// TODO Auto-generated method stub
		List<User> temp=new ArrayList<User>();
		temp=userRepository.findAll();
		for(User u:temp) {
			if(u.getUserName().equals(user.getUserName())) {
				if(u.getPassword().equals(user.getPassword())) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		return false;
	}
	public User removeUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> userContainer=userRepository.findById(user.getUserId());
		if(userContainer.isPresent()) {
			User user1=userContainer.get();
			userRepository.delete(user1);
			return user;
		}
		return null;
	}
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		List<User>container=new ArrayList<User>();
		container=userRepository.findAll();
		List<User>res=new ArrayList<User>();
		for(User u:container) {
			if(!(u.getRole().equals("admin"))) {
				res.add(u);
			}
		}
		return res;
	}
	

}
