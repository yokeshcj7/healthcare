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
import com.example.finalproject.service.AppointmentService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AppointmentController {
@Autowired
AppointmentService appointmentService;
@PostMapping("/addAppointment")
public Appointment addAppointment(@RequestBody Appointment appointment) {
	return appointmentService.addAppointment(appointment);
}
@GetMapping("/viewAllAppointment")
public List<Appointment> viewAllAppointment(){
	return appointmentService.viewAllAppointment();
}
@GetMapping("/viewAppointmentsByPatient/{name}")
public List<Appointment> viewAppointmentByPatient(@PathVariable String name){
	return appointmentService.viewAppointmentByPatient(name);
}
@GetMapping("/viewAppointment/{id}")
public Appointment viewAppointment(@PathVariable int id) {
	return appointmentService.viewAppointment(id);
}
@PutMapping("/updateAppointment")
public Appointment updateAppointment(@RequestBody Appointment appointment) {
	return appointmentService.updateAppointment(appointment);
}
@DeleteMapping("/deleteAppointment/{id}")
public String deleteAppointment(@PathVariable int id) {
	return appointmentService.deleteAppointment(id);
}
@GetMapping("/getAppointment/{centerid}")
public Appointment getAppointment(@PathVariable int centerid) {
	return appointmentService.getAppointment(centerid);
}
}
