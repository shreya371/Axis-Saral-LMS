package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.ProjectManager;
import com.axis.model.ProjectManagerPost;
import com.axis.service.ProjectManagerService;



@RestController
@RequestMapping("/ms1")
public class ProjectManagerController {
	
	@Autowired
	ProjectManagerService projectManagerService;
	
	//--------------get all project managers -------------
	@GetMapping("/pmng/g1")
	public List<ProjectManager> getAllPmng(){
		return projectManagerService.getAllPmng();
	}
	
	//---------get project manager for particular project id-------
	@GetMapping("/pmng/g2/{project_project_id}")
	public ProjectManager getOnePmng(@PathVariable int project_project_id) {
		return projectManagerService.getOnePmg(project_project_id);	
	}
	
	@PostMapping("/pmng/post/{proj_id}")
	public ProjectManager postManager(@RequestBody ProjectManagerPost projectManagerPost,@PathVariable int proj_id) {
		System.out.println(projectManagerPost.toString());
		return projectManagerService.postManager(projectManagerPost,proj_id);
	}
	
	
	
	
	

}
