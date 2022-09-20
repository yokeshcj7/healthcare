package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.finalproject.entity.Appointment;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer>{

}
