package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.finalproject.entity.Test;
@Repository
public interface TestRepository extends JpaRepository<Test,Integer>{

}
