package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.StakeHolder;
@Repository
public interface StakeHolderRepository extends JpaRepository<StakeHolder, Integer>{
	
	@Query(value="SELECT * from stake_holders where project_proj_id= :value",nativeQuery = true)
	public List<StakeHolder> getAllByProjectIdRepo(@Param("value") int value);
	
//	@Query(value="SELECT * from project WHERE department_dept_id= :value",nativeQuery = true)
//	public List<Project> getAllByDept_id( @Param("value") int value); 

}
