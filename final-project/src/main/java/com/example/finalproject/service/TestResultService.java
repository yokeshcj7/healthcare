package com.example.finalproject.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import com.example.finalproject.entity.Appointment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.Patient;
import com.example.finalproject.entity.TestResult;
import com.example.finalproject.repository.PatientRepository;
import com.example.finalproject.repository.TestResultRepository;
@Service
public class TestResultService {
@Autowired
TestResultRepository testResultRepository;
@Autowired
PatientRepository patientRepository;
	public TestResult addTestResult(TestResult testResult) {
		// TODO Auto-generated method stub
		return testResultRepository.save(testResult);
	}
	public TestResult updateResult(TestResult testResult) {
		// TODO Auto-generated method stub
		int testId=testResult.getId();
		Optional<TestResult> container=testResultRepository.findById(testId);
		if(container.isPresent()) {
			TestResult temp=container.get();
			temp.setAppointment(testResult.getAppointment());
			temp.setCondition(testResult.getCondition());
			temp.setTestReading(testResult.getTestReading());
			return testResultRepository.save(temp);
		}
		else {
			return testResultRepository.save(testResult);
		}
	}
	public TestResult deleteResult(int id) {
		// TODO Auto-generated method stub
		Optional<TestResult> container=testResultRepository.findById(id);
		if(container.isPresent()) {
			TestResult t=container.get();
			testResultRepository.delete(t);
			return t;
		}
		return null;
	}
	public Set<TestResult> viewResultByPatient(Patient patient) {
		// TODO Auto-generated method stub
		Optional<Patient> container = patientRepository.findById(patient.getPatientId());
		Set<TestResult> fin=new HashSet<TestResult>();
		if(container.isPresent()) {
			Patient oldPatient=container.get();
			Set<Appointment> temp=new HashSet<Appointment>();
			temp=oldPatient.getAppointment();
			for(Appointment a:temp) {
				Set<TestResult> res=new HashSet<TestResult>();
				res=a.getTestResult();
				fin.addAll(res);
			}
		}
		return fin;
	}

}
