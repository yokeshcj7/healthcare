package com.example.finalproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalproject.entity.Center;
import com.example.finalproject.entity.Test;
import com.example.finalproject.repository.TestRepository;

@Service
public class TestService {
	@Autowired
	TestRepository testRepository;

	public Test addNewTest(Test test) {
		// TODO Auto-generated method stub
		return testRepository.save(test);
	}

	public List<Test> getTests() {
		// TODO Auto-generated method stub
		return testRepository.findAll();
	}

	public List<Test> getTestByCenter(int id) {
		// TODO Auto-generated method stub
		List<Test> container=testRepository.findAll();
		List<Test> temp=new ArrayList<Test>();
		for(Test t:container) {
			if(t.getCenter().getId()==id) {
				temp.add(t);
			}
		}
		return temp;
	}

	public Test updateTestDetail(Test test) {
		// TODO Auto-generated method stub
		Optional<Test> container=testRepository.findById(test.getId());
		if(container.isPresent()) {
			Test temp=container.get();
			temp.setCenter(test.getCenter());
			temp.setNormalValue(test.getNormalValue());
			temp.setTestName(test.getTestName());
			temp.setTestPrice(test.getTestPrice());
			temp.setUnits(test.getUnits());
			return testRepository.save(temp);
		}
		return null;
	}

	public Test remove(int centerId, Test test) {
		// TODO Auto-generated method stub
		Optional<Test> container=testRepository.findById(test.getId());
		if(container.isPresent()) {
			if(test.getCenter().getId()==centerId) {
				Test t=container.get();
				testRepository.delete(t);
				return t;
			}
		}
		return null;
	}

	public String deleteTest(int id) {
		// TODO Auto-generated method stub
		Optional<Test> container=testRepository.findById(id);
		if(container.isPresent()) {
			Test oldTest=container.get();
			testRepository.delete(oldTest);
			return "deleted Successfull";
		}
		return "not Deleted";
		
	}
}
