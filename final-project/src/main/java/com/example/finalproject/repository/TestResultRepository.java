package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.finalproject.entity.TestResult;
@Repository
public interface TestResultRepository extends JpaRepository<TestResult,Integer>{

}
