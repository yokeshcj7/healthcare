package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.Appointment;
import com.example.finalproject.entity.Center;
import com.example.finalproject.entity.Test;
import com.example.finalproject.repository.AppointmentRepository;
import com.example.finalproject.repository.CenterRepository;
import com.example.finalproject.repository.TestRepository;



@Service
public class CenterService {
	@Autowired
	CenterRepository centerRepository;
	@Autowired
	TestRepository testRepository;
	@Autowired
	AppointmentRepository appointmentRepository;
		public Center addCenter(Center center) {
			// TODO Auto-generated method stub
			return centerRepository.save(center);
		}
		public List<Center> viewCenters() {
			// TODO Auto-generated method stub
			return centerRepository.findAll();
		}
		public Center getDiagnosticCenter(int id) {
			// TODO Auto-generated method stub
			Optional<Center> container=centerRepository.findById(id);
			if(container.isPresent()) {
				Center c=container.get();
				return c;
			}
			return null;
		}
		public Center updateCenter(Center center) {
			// TODO Auto-generated method stub
			Optional<Center> container=centerRepository.findById(center.getId());
			if(container.isPresent()) {
				Center oldCenter=container.get();
				oldCenter.setAddress(center.getAddress());
				oldCenter.setContactEmail(center.getContactEmail());
				oldCenter.setContactNo(center.getContactNo());
				oldCenter.setName(center.getName());
				oldCenter.setServiceOffered(center.getServiceOffered());
				oldCenter.setTest(center.getTest());
				return centerRepository.save(oldCenter);
			}
			return centerRepository.save(center);
		}
		public Test viewTestDetail(int centerId, String name) {
			// TODO Auto-generated method stub
			Optional<Center> container=centerRepository.findById(centerId);
			if(container.isPresent()) {
				Center oldCenter=container.get();
				Set<Test> temp=new HashSet<Test>();
				temp=oldCenter.getTest();
				for(Test t:temp) {
					if(t.getTestName().equals(name)) {
						return t;
					}
				}
			}
			return null;
		}
		public Test addTest(int centerId, int testId) {
			// TODO Auto-generated method stub
			Optional<Center> container=centerRepository.findById(centerId);
			Set<Test> temp=new HashSet<Test>();
			Optional<Test> container2=testRepository.findById(testId);
			if(container.isPresent()) {
				if(container2.isPresent()) {
				Center oldCenter=container.get();
				temp=oldCenter.getTest();
				Test oldTest=container2.get();
				temp.add(oldTest);
				oldCenter.setTest(temp);
				centerRepository.save(oldCenter);
				return testRepository.save(container2.get());
			}
			}
			return null;
		}
		public Center addCenterByName(String name) {
			// TODO Auto-generated method stub
			List<Center> container=centerRepository.findAll();
			for(Center c:container) {
				if(c.getName().equals(name)) {
					return c;
				}
			}
			return null;
		}
		public String deleteCenter(int id) {
			// TODO Auto-generated method stub
			Optional<Center> container=centerRepository.findById(id);
			if(container.isPresent()) {
				Center oldCenter=container.get();
				centerRepository.delete(oldCenter);
				return "deleted Successfull";
			}
			return "not Deleted";
		}
		public List<Appointment> getListOfAppointments(String name) {
			// TODO Auto-generated method stub
			List<Appointment> container=appointmentRepository.findAll();
			List<Appointment> res=new ArrayList<Appointment>();
			for(Appointment a:container) {
				if(a.getCenter().getName().equals(name)) {
					res.add(a);
				}
			}
			return res;
		}
}
