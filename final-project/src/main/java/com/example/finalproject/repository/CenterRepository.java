package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.finalproject.entity.Center;

@Repository
public interface CenterRepository extends JpaRepository<Center,Integer>{

}
