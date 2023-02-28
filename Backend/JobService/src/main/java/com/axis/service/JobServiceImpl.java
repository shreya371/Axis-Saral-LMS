package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.feignclient.ProjectClient;
import com.axis.model.Job;
import com.axis.model.JobPost;
import com.axis.model.Project;
import com.axis.repository.JobRepository;

@Service
public class JobServiceImpl implements JobService {

	@Autowired
	JobRepository jobRepository;
	
	@Autowired
	ProjectClient projectClient;
	
	@Override
	public List<Job> getAllJobs() {
		// TODO Auto-generated method stub
		return jobRepository.findAll();
	}


	@Override
	public List<Job>getJobByProj_id(int proj_id) {
		// TODO Auto-generated method stub
		return jobRepository.getJobByProjidR(proj_id);
	}


	@Override
	public List<Job> getJobByName(String jopp_name) {
		// TODO Auto-generated method stub
		return jobRepository.getJobByName(jopp_name);
	}


	@Override
	public Job postJob(JobPost jobPost, int proj_id) {
		
		Project project =projectClient.getOneProjectById(proj_id);
		
		Job job=new Job();
		job.setJopp_name(jobPost.getJopp_name());
		job.setJopp_title(jobPost.getJopp_title());
		job.setJopp_desc(jobPost.getJopp_desc());
		job.setJoop_vacancies(jobPost.getJoop_vacancies());
		job.setJopp_skills(jobPost.getJopp_skills());
		job.setJopp_exp(jobPost.getJopp_exp());
		job.setJopp_team(jobPost.getJopp_team());
		job.setJopp_shift(jobPost.getJopp_shift());
		job.setJopp_location(jobPost.getJopp_location());
		job.setJopp_slary(jobPost.getJopp_slary());
		
		job.setProject(project);
		
		jobRepository.save(job);
		
		
		return job;
	}
	
	

}
