package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.example.finalproject.entity.Appointment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.Patient;
import com.example.finalproject.entity.TestResult;
import com.example.finalproject.repository.PatientRepository;
@Service
public class PatientService {
@Autowired
PatientRepository patientRepository;
	public Patient addPatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientRepository.save(patient);
	}
	public List<Patient> viewPatient() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}
	public Patient update(Patient patient) {
		// TODO Auto-generated method stub
		Optional<Patient> container=patientRepository.findById(patient.getPatientId());
		if(container.isPresent()) {
			Patient oldPatient=container.get();
			oldPatient.setAge(patient.getAge());
			oldPatient.setAppointment(patient.getAppointment());
			oldPatient.setGender(patient.getGender());
			oldPatient.setName(patient.getName());
			oldPatient.setPhoneNo(patient.getPhoneNo());
			return patientRepository.save(oldPatient);
		}else {
		return patientRepository.save(patient);
	}
		}
	public Patient viewByName(String name) {
		// TODO Auto-generated method stub
		List<Patient> container=new ArrayList<Patient>();
		container=patientRepository.findAll();
		for(Patient p:container) {
			if(p.getName().equals(name)) {
				return p;
			}
		}
		return null;
	}
	public TestResult viewTestResult(int id) {
		// TODO Auto-generated method stub
		List<Patient> container=new ArrayList<Patient>();
		container=patientRepository.findAll();
		for(Patient p:container) {
			Set<Appointment> temp=new HashSet<Appointment>();
			temp=p.getAppointment();
			for(Appointment a:temp) {
				Set<TestResult> tr=new HashSet<TestResult>();
				tr=a.getTestResult();
				for(TestResult res:tr) {
					if(res.getId()==id) {
						return res;
					}
				}
			}
		}
		return null;
	}
	public List<TestResult> getAllTestResult(String name) {
		// TODO Auto-generated method stub
		List<Patient> container=new ArrayList<Patient>();
		container=patientRepository.findAll();
		for(Patient p:container) {
			if(p.getName().equals(name)) {
				Set<Appointment> temp=new HashSet<Appointment>();
				temp=p.getAppointment();
				for(Appointment a:temp) {
					Set<TestResult> tr=new HashSet<TestResult>();
					tr=a.getTestResult();
					List<TestResult> res=new ArrayList<TestResult>(tr);
					return res;
				}
			}
		}
		return null;
	}

}
