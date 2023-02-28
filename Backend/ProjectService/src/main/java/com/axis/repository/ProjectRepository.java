package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
	
	@Query(value="SELECT * from project WHERE proj_id= :value",nativeQuery = true)
	public List<Project> getAllById(@Param("value") int value); 
	
	@Query(value="SELECT * from project WHERE department_dept_id= :value",nativeQuery = true)
	public List<Project> getAllByDept_id( @Param("value") int value); 
	
	@Query(value="SELECT * from project WHERE proj_name LIKE :value%",nativeQuery = true)
	public List<Project> searchProjectR( @Param("value") String value); 
	
	

}
