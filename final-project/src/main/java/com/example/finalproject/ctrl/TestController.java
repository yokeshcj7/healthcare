package com.example.finalproject.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalproject.entity.Test;
import com.example.finalproject.service.TestService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TestController {
	@Autowired
	TestService TestService;
	
	@PostMapping("/addNewTest")
	public Test addNewTest(@RequestBody Test test) {
		return TestService.addNewTest(test);
	}
	@GetMapping("/tests")
	public List<Test> getTests(){
		return TestService.getTests();
	}
	@GetMapping("/getTestByCenter/{id}")
	public List<Test> getTestByCenter(@PathVariable int id){
		return TestService.getTestByCenter(id);
	}
	@PutMapping("/updateTestDetail")
	public Test updateTestDetail(@RequestBody Test test) {
		return TestService.updateTestDetail(test);
	}
	@DeleteMapping("/removeTestFromCenter/{centerId}")
	public Test remove(@PathVariable int centerId,@RequestBody Test test) {
		return TestService.remove(centerId,test);
	}
	@DeleteMapping("/deleteTest/{id}")
	public String deleteTest(@PathVariable int id) {
		return TestService.deleteTest(id);
	}
}
