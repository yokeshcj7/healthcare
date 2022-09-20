package com.example.finalproject.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.finalproject.entity.Appointment;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="patient")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Patient {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int id;
String name;
String phoneNo;
int age;
String gender;
@OneToMany(mappedBy="patient",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
Set<Appointment> appointment;
public Patient() {
	super();
	// TODO Auto-generated constructor stub
}
public Patient(int patientId, String name, String phoneNo, int age, String gender, Set<Appointment> appointment) {
	super();
	this.id = patientId;
	this.name = name;
	this.phoneNo = phoneNo;
	this.age = age;
	this.gender = gender;
	this.appointment = appointment;
}
public int getPatientId() {
	return id;
}
public void setPatientId(int patientId) {
	this.id = patientId;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPhoneNo() {
	return phoneNo;
}
public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public Set<Appointment> getAppointment() {
	return appointment;
}
public void setAppointment(Set<Appointment> appointment) {
	this.appointment = appointment;
}
@Override
public String toString() {
	return "Patient [patientId=" + id + ", name=" + name + ", phoneNo=" + phoneNo + ", age=" + age + ", gender="
			+ gender + ", appointment=" + appointment + "]";
}

}
