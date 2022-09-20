package com.example.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.finalproject.entity.User;

@Repository
public interface AdminRepository extends JpaRepository<User,Integer>{

}
