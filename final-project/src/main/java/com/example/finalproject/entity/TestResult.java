package com.example.finalproject.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.example.finalproject.entity.Appointment;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="testresult")
public class TestResult {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int id;
double testReading;
String condition;
@JsonBackReference
@ManyToOne(fetch = FetchType.LAZY, optional = false)
@JoinColumn(name="appointment_id",nullable=false)
Appointment appointment;
public TestResult() {
	super();
	// TODO Auto-generated constructor stub
}
public TestResult(int id, double testReading, String condition, Appointment appointment) {
	super();
	this.id = id;
	this.testReading = testReading;
	this.condition = condition;
	this.appointment = appointment;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public double getTestReading() {
	return testReading;
}
public void setTestReading(double testReading) {
	this.testReading = testReading;
}
public String getCondition() {
	return condition;
}
public void setCondition(String condition) {
	this.condition = condition;
}
public Appointment getAppointment() {
	return appointment;
}
public void setAppointment(Appointment appointment) {
	this.appointment = appointment;
}
@Override
public String toString() {
	return "TestResult [id=" + id + ", testReading=" + testReading + ", condition=" + condition + ", appointment="
			+ appointment + "]";
}


}
