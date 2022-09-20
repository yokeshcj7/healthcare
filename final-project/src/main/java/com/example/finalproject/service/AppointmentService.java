package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.Appointment;
import com.example.finalproject.entity.Patient;
import com.example.finalproject.entity.TestResult;
import com.example.finalproject.repository.AppointmentRepository;
import com.example.finalproject.repository.PatientRepository;
@Service
public class AppointmentService {
@Autowired
AppointmentRepository appointmentRepository;
@Autowired
PatientRepository patientRepository;
	public Appointment addAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		return appointmentRepository.save(appointment);
	}
	public List<Appointment> viewAllAppointment() {
		// TODO Auto-generated method stub
		return appointmentRepository.findAll();
	}
	public Appointment viewAppointment(int id) {
		// TODO Auto-generated method stub
		Optional<Appointment> container=appointmentRepository.findById(id);
		if(container.isPresent()) {
			Appointment a=container.get();
			return a;
		}
		return null;
	}
	public Appointment updateAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		Optional<Appointment> container=appointmentRepository.findById(appointment.getId());
		if(container.isPresent()) {
			Appointment temp=container.get();
			temp.setAppointmentDate(appointment.getAppointmentDate());
			temp.setApprovalStatus(appointment.isApprovalStatus());
			temp.setTest(appointment.getTest());
			temp.setCenter(appointment.getCenter());
			temp.setPatient(appointment.getPatient());
			temp.setTestResult(appointment.getTestResult());
			return appointmentRepository.save(temp);
		}
		return null;
	}
	public String deleteAppointment(int id) {
		// TODO Auto-generated method stub
		Optional<Appointment> container=appointmentRepository.findById(id);
		if(container.isPresent()) {
			Appointment temp=container.get();
			appointmentRepository.delete(temp);
			return "Successfully deleted";
		}
		return "Not successfull";
	}
	public List<Appointment> viewAppointmentByPatient(String name) {
		// TODO Auto-generated method stub
		List<Patient> patient=new ArrayList<Patient>();
		patient=patientRepository.findAll();
		for(Patient p:patient) {
			if(p.getName().equals(name)) {
				Set<Appointment> a=new HashSet<Appointment>();
				a=p.getAppointment();
				List<Appointment> res=new ArrayList<Appointment>(a);
				return res;
			}
		}
		return null;
	}
	public Appointment getAppointment(int centerid) {
		// TODO Auto-generated method stub
		List<Appointment>container=new ArrayList<Appointment>();
		container=appointmentRepository.findAll();
		for(Appointment temp:container) {
			if(temp.getCenter().getId()==centerid) {
				return temp;
			}
		}
		return null;
	}

}
