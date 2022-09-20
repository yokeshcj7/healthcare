package com.example.finalproject.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="diagnostictest")
public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String testName;
	double testPrice;
	String normalValue;
	String units;
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="center_id",nullable=false)
	Center center;
	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Test(int id, String testName, double testPrice, String normalValue, String units, Center center) {
		super();
		this.id = id;
		this.testName = testName;
		this.testPrice = testPrice;
		this.normalValue = normalValue;
		this.units = units;
		this.center = center;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTestName() {
		return testName;
	}
	public void setTestName(String testName) {
		this.testName = testName;
	}
	public double getTestPrice() {
		return testPrice;
	}
	public void setTestPrice(double testPrice) {
		this.testPrice = testPrice;
	}
	public String getNormalValue() {
		return normalValue;
	}
	public void setNormalValue(String normalValue) {
		this.normalValue = normalValue;
	}
	public String getUnits() {
		return units;
	}
	public void setUnits(String units) {
		this.units = units;
	}
	public Center getCenter() {
		return center;
	}
	public void setCenter(Center center) {
		this.center = center;
	}
	@Override
	public String toString() {
		return "Test [id=" + id + ", testName=" + testName + ", testPrice=" + testPrice + ", normalValue=" + normalValue
				+ ", units=" + units + ", center=" + center + "]";
	}
	
}
