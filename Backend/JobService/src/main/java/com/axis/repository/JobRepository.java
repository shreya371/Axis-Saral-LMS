package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.Job;
@Repository
public interface JobRepository extends JpaRepository<Job, Integer>{

	@Query(value="SELECT * from job_opportunities WHERE jopp_name= :value",nativeQuery = true)
	public List<Job> getJobByName(@Param("value") String value);
	
	@Query(value="SELECT * from job_opportunities WHERE project_proj_id= :value",nativeQuery = true)
	public List<Job> getJobByProjidR(@Param("value") int value);

}
