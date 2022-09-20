package com.example.finalproject.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int userId;
String userName;
String password;
String role;
public User() {
	super();
	// TODO Auto-generated constructor stub
}
public User(int userId, String userName, String password, String role) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.password = password;
	this.role = role;
}
public int getUserId() {
	return userId;
}
public void setUserId(int userId) {
	this.userId = userId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
@Override
public String toString() {
	return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", role=" + role + "]";
}


}
