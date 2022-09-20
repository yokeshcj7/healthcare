package com.example.finalproject.ctrl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalproject.entity.Patient;
import com.example.finalproject.entity.TestResult;
import com.example.finalproject.service.TestResultService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TestResultController {
@Autowired
TestResultService testResultService;
@PostMapping("/addTestResult")
public TestResult addTestResult(@RequestBody TestResult testResult) {
	return testResultService.addTestResult(testResult);
}
@PutMapping("/updateResult")
public TestResult updateResult(@RequestBody TestResult testResult) {
	return testResultService.updateResult(testResult);
}
@DeleteMapping("/deleteResult/{id}")
public TestResult deleteResult(@PathVariable int id) {
	return testResultService.deleteResult(id);
}
@GetMapping("/viewResultByPatient")
public Set<TestResult> viewResultByPatient(@RequestBody Patient patient){
	return testResultService.viewResultByPatient(patient);
}
}
