package com.example.finalproject.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalproject.entity.Patient;
import com.example.finalproject.entity.TestResult;
import com.example.finalproject.service.PatientService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PatientController {
@Autowired
PatientService patientService;
@PostMapping("/addPatient")
public Patient addPatient(@RequestBody Patient patient) {
	return patientService.addPatient(patient);
}
@GetMapping("/viewPatient")
public List<Patient> viewPatient(){
	return patientService.viewPatient();
}
@GetMapping("/viewPatientByName/{name}")
public Patient viewByName(@PathVariable String name) {
	return patientService.viewByName(name);
}
@PutMapping("/updatePatient")
public Patient updatePatient(@RequestBody Patient patient) {
	return patientService.update(patient);
}
@GetMapping("/viewTestResult/{id}")
public TestResult viewTestResult(@PathVariable int id) {
	return patientService.viewTestResult(id);
}
@GetMapping("/getAllTestResult/{name}")
public List<TestResult> getAllTestResult(@PathVariable String name){
	return patientService.getAllTestResult(name);
}
}
