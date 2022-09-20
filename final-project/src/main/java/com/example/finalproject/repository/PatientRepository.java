package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.finalproject.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer>{

}
