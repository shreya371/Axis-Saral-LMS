package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.ProjMangerNotFoundException;
import com.axis.model.Project;
import com.axis.model.ProjectManager;
import com.axis.model.ProjectManagerPost;
import com.axis.repository.ProjectManagerRepository;
import com.axis.repository.ProjectRepository;
import com.axis.util.AppConstants;

@Service
public class ProjectManagerServiceImpl implements ProjectManagerService{
	
	@Autowired
	ProjectManagerRepository projectManagerRepository;
	
	@Autowired
	ProjectRepository projectRepository;

	@Override
	public List<ProjectManager> getAllPmng() {
		
		// TODO Auto-generated method stub
		List<ProjectManager> pmanager = projectManagerRepository.findAll();
		if(pmanager.size()==0) {
			throw new ProjMangerNotFoundException(AppConstants.ProjManager_Not_Found_Message);
		}
		return pmanager;
	}

	@Override
	public ProjectManager getOnePmg(int project_project_id) {
		// TODO Auto-generated method stub
		ProjectManager pmanager = projectManagerRepository.getOnePmng(project_project_id);
		if(pmanager ==null) {
			throw new ProjMangerNotFoundException(AppConstants.ProjManager_Not_Found_Message);
		}
		return pmanager;
		
	
	}

	@Override
	public ProjectManager postManager(ProjectManagerPost projectManagerPost, int proj_id) {
		Project project= projectRepository.findById(proj_id).orElse(null);//projectnotfound exception and unique constraint exception
		
		System.out.println(projectManagerPost.toString());
		ProjectManager pmng=new ProjectManager();
		pmng.setPmng_name(projectManagerPost.getPmng_name());
		pmng.setPmng_desg(projectManagerPost.getPmng_desg());
		pmng.setPmng_email(projectManagerPost.getPmng_email());
		pmng.setPmng_contact(projectManagerPost.getPmng_contact());
		System.out.println(projectManagerPost.getPmng_contact());
		pmng.setPmng_uname(projectManagerPost.getPmng_uname());
		pmng.setPmng_pswd(projectManagerPost.getPmng_pswd());
		pmng.setPmng_exp(projectManagerPost.getPmng_exp());
		pmng.setPmng_salary(projectManagerPost.getPmng_salary());
		pmng.setPmng_propic(projectManagerPost.getPmng_propic());
		pmng.setProject(project);
		projectManagerRepository.save(pmng);
		return pmng;
	}

}
