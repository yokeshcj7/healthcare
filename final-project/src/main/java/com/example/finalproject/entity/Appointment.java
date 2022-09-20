package com.example.finalproject.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="appointment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	Date appointmentDate;
	boolean approvalStatus;
	@OneToMany
	Set<Test> test;
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="patient_id",nullable=false)
	Patient patient;
	@OneToOne
	Center center;
	@OneToMany(mappedBy="appointment",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	Set<TestResult> testResult;
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appointment(int id, Date appointmentDate, boolean approvalStatus, Set<Test> test, Patient patient,
			Center center, Set<TestResult> testResult) {
		super();
		this.id = id;
		this.appointmentDate = appointmentDate;
		this.approvalStatus = approvalStatus;
		this.test = test;
		this.patient = patient;
		this.center = center;
		this.testResult = testResult;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public boolean isApprovalStatus() {
		return approvalStatus;
	}
	public void setApprovalStatus(boolean approvalStatus) {
		this.approvalStatus = approvalStatus;
	}
	public Set<Test> getTest() {
		return test;
	}
	public void setTest(Set<Test> test) {
		this.test = test;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Center getCenter() {
		return center;
	}
	public void setCenter(Center center) {
		this.center = center;
	}
	public Set<TestResult> getTestResult() {
		return testResult;
	}
	public void setTestResult(Set<TestResult> testResult) {
		this.testResult = testResult;
	}
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", appointmentDate=" + appointmentDate + ", approvalStatus=" + approvalStatus
				+ ", test=" + test + ", patient=" + patient + ", center=" + center + ", testResult=" + testResult + "]";
	}
	
}
