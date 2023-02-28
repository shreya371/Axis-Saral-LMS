package com.axis.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Project;
import com.axis.model.ProjectPost;
import com.axis.service.ProjectService;

@RestController
@RequestMapping("/ms1")
public class ProjectController {
	
	@Autowired
	ProjectService projectService;
	
	//----------get all projects----------
	@GetMapping("/proj/g1")
	public List<Project> getAllProjects(){
		return projectService.getAllProjects();
	}
	
	//------get all projects by project id-----------
	@GetMapping("/proj/g2/{proj_id}")
	public List<Project> getAllByProjectId(@PathVariable int proj_id){
		return projectService.getAllByProjectId(proj_id);
		
	}
	
	//-----------get one project by project id------------
	
	@GetMapping("/proj/g3/{proj_id}")
	public Project getOneProjectById(@PathVariable int proj_id) {
		return projectService.getOneProjectById(proj_id);
	}
	
	//----------get all projects by department id-------
	
	@GetMapping("/proj/g4/{dept_id}")
	public List<Project> getAllByDeptId(@PathVariable int dept_id){
		return projectService.getAllByDeptId(dept_id);
		
	}
	
	//------------post a project---------------
	@PostMapping("/proj/post/{dept_id}")
	public Project postProject(@RequestBody ProjectPost projectPost ,@PathVariable int dept_id) {
		return projectService.postProject(projectPost,dept_id);
	}
	
	@GetMapping("/search/{proj_name}")
	public List<Project> searchProject(@PathVariable String proj_name){
		return projectService.searchProject(proj_name);
	}
	
	

}
