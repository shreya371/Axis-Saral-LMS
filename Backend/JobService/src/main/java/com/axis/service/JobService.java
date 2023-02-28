package com.axis.service;

import java.util.List;
import java.util.Optional;


import com.axis.model.Job;
import com.axis.model.JobPost;

public interface JobService {

	public List<Job> getAllJobs();
	
	public List<Job> getJobByProj_id(int proj_id);
	
	public List<Job> getJobByName(String jopp_name);

	public Job postJob(JobPost jobPost, int proj_id);
}
