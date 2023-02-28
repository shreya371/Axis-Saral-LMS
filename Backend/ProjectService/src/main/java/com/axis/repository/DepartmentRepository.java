package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer>{

}
