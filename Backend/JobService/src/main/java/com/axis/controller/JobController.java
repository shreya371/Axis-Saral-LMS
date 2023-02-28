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

import com.axis.model.Job;
import com.axis.model.JobPost;
import com.axis.service.JobService;

@RestController
@RequestMapping("/ms3")
public class JobController {

	@Autowired
	JobService jobService;
	//--------Get All Job Opportunities------
	@GetMapping("/jopp/g1")
	public List<Job> getAllJobs()
	{
		return jobService.getAllJobs();
	}
	
	//-----Get all Job Opportunities by Project_Id--------
	@GetMapping("/jopp/g2/{proj_id}")
	public List<Job> getJobByProj_id(@PathVariable int proj_id)
	{
		return jobService.getJobByProj_id(proj_id);
	}
	
	//-----get all Job Opportunities by JoppName------
	@GetMapping("/jopp/g3/{jopp_name}")
	public List<Job> getJobByName(@PathVariable String jopp_name)
	{
		return jobService.getJobByName(jopp_name);
	}
	
	@PostMapping("/jopp/post/{proj_id}")
	public Job postJob(@RequestBody JobPost jobPost,@PathVariable int proj_id) {
		return jobService.postJob(jobPost,proj_id);
		
	}
	
}
