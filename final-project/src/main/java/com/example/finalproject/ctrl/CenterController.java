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

import com.example.finalproject.entity.Appointment;
import com.example.finalproject.entity.Center;
import com.example.finalproject.entity.Test;
import com.example.finalproject.service.CenterService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CenterController {
	@Autowired
	CenterService centerService;
	@PostMapping("/addDiagnosticCenter")
	public Center addCenter(@RequestBody Center center) {
		return centerService.addCenter(center);
	}
	@GetMapping("/getAllDiagnosticCenter")
	public List<Center> viewCenters(){
		return centerService.viewCenters();
	}
	@GetMapping("/getDiagnosticCenter/{id}")
	public Center getDiagnosticCenter(@PathVariable int id) {
		return centerService.getDiagnosticCenter(id);
	}
	@PutMapping("/updateDiagnosticCenter")
	public Center updateCenter(@RequestBody Center center) {
		return centerService.updateCenter(center);
	}
	@GetMapping("/viewTestDetail/{centerId}/{name}")
	public Test viewTestDetail(@PathVariable int centerId,@PathVariable String name) {
		return centerService.viewTestDetail(centerId,name);
	}
	@PostMapping("/addTest/{centerId}/{testId}")
	public Test addTest(@PathVariable int centerId,@PathVariable int testId) {
		return centerService.addTest(centerId,testId);
	}
	@GetMapping("/getDiagnosticCenterByName/{name}")
	public Center addCenterByName(@PathVariable String name) {
		return centerService.addCenterByName(name);
	}
	@DeleteMapping("/deleteMapping/{id}")
	public String deleteCenter(@PathVariable int id) {
		return centerService.deleteCenter(id);
	}
	@GetMapping("/getListOfAppointments/{name}")
	public List<Appointment> getListOfAppointments(@PathVariable String name){
		return centerService.getListOfAppointments(name);
	}
}
