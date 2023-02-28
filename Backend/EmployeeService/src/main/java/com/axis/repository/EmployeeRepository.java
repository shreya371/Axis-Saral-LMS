package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{


	
	
	@Query(value="SELECT * from employee WHERE empl_role= :value",nativeQuery = true)
	public List<Employee> getAllByRole(@Param("value") String value); 
	
	@Query(value="SELECT * from employee WHERE empl_team= :value",nativeQuery = true)
	public List<Employee> getAllByTeam(@Param("value") int value);
	
	@Query(value="select * from employee where empl_role=\"Support Team\" and project_proj_id= :value",nativeQuery = true)
	public List<Employee> getAllByProjectId(@Param("value") int value);
	
	@Query(value="SELECT * from employee WHERE empl_name  LIKE :value%",nativeQuery = true)
	public List<Employee> getAllByName(@Param("value")String value);
	
	@Query(value="SELECT * from employee WHERE empl_email= :value",nativeQuery = true)
	public List<Employee> validateR(@Param("value")String value);
	
	@Query(value="SELECT * from employee WHERE empl_email= :value",nativeQuery = true)
	public List<Employee> getEmployeeR(@Param("value")String value);
	
	
}
