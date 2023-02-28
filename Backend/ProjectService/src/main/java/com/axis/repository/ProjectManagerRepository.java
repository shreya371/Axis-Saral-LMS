package com.axis.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.ProjectManager;

@Repository
public interface ProjectManagerRepository extends JpaRepository<ProjectManager, Integer> {
	
	@Query(value="SELECT * from project_manager WHERE project_proj_id = :value",nativeQuery = true)
	public ProjectManager getOnePmng(@Param("value")int value); 

}
