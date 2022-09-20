package com.example.finalproject.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="diagnosticcenter")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Center {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	String contactNo;
	String address;
	String contactEmail;
	@ElementCollection
	List<String> serviceOffered;
	@OneToMany(mappedBy="center",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	Set<Test> test;
	public Center() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Center(int id, String name, String contactNo, String address, String contactEmail,
			List<String> serviceOffered, Set<Test> test) {
		super();
		this.id = id;
		this.name = name;
		this.contactNo = contactNo;
		this.address = address;
		this.contactEmail = contactEmail;
		this.serviceOffered = serviceOffered;
		this.test = test;
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public List<String> getServiceOffered() {
		return serviceOffered;
	}
	public void setServiceOffered(List<String> serviceOffered) {
		this.serviceOffered = serviceOffered;
	}
	public Set<Test> getTest() {
		return test;
	}
	public void setTest(Set<Test> test) {
		this.test = test;
	}
	
	@Override
	public String toString() {
		return "Center [id=" + id + ", name=" + name + ", contactNo=" + contactNo + ", address=" + address
				+ ", contactEmail=" + contactEmail + ", serviceOffered=" + serviceOffered + ", test=" + test
				+ "]";
	}
	
}
