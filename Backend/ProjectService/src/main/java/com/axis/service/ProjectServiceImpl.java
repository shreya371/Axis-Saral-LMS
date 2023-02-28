package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.EmptyListException;
import com.axis.exception.ProjectNotFoundException;
import com.axis.model.Department;
import com.axis.model.Project;
import com.axis.model.ProjectPost;
import com.axis.repository.DepartmentRepository;
import com.axis.repository.ProjectRepository;
import com.axis.util.AppConstants;
@Service
public class ProjectServiceImpl implements ProjectService{
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	

	@Override
	public List<Project> getAllProjects() {
		// TODO Auto-generated method stub
		List<Project> proj=projectRepository.findAll();
		
		if (proj.size()==0) {
			throw new EmptyListException(AppConstants.Empty_List_Message) ;
		}
		return proj;
	}

	@Override
	public List<Project> getAllByProjectId(int proj_id) {
		List<Project> proj=projectRepository.getAllById(proj_id);
		if (proj == null) {
			throw new ProjectNotFoundException(AppConstants.Proj_Not_Found_Message);
		}
		return proj;
		
		
	}

	@Override
	public Project getOneProjectById(int proj_id) {
		// TODO Auto-generated method stub
		Project proj=projectRepository.findById(proj_id).orElse(null);
		if (proj == null) {
			throw new ProjectNotFoundException(AppConstants.Proj_Not_Found_Message);
		}
		return proj;//projectid not found exception
	}

	@Override
	public List<Project> getAllByDeptId(int dept_id) {
		// TODO Auto-generated method stub
		List<Project> proj =projectRepository.getAllByDept_id(dept_id);
		if (proj.size()==0) {
			throw new EmptyListException(AppConstants.Empty_List_Message) ;
		}
		return proj; //dept not found exception or empty exception
	}

	@Override
	public Project postProject(ProjectPost projectPost, int dept_id) {
		// TODO Auto-generated method stub
		
		Department department=departmentRepository.findById(dept_id).orElse(null);
		Project project=new Project();
		project.setProj_name(projectPost.getProj_name());
		project.setProj_code(projectPost.getProj_code());
		project.setProj_desc(projectPost.getProj_desc());
		project.setProj_startdate(projectPost.getProj_startdate());
		project.setProj_status(projectPost.getProj_status());
		project.setProj_enddate(projectPost.getProj_enddate());
		
		project.setProj_pic(projectPost.getProj_pic());
		project.setProj_flowchart(projectPost.getProj_flowchart());
		project.setProj_owner_code(projectPost.getProj_owner_code());
		project.setProj_owner_name(projectPost.getProj_owner_name());
		project.setProj_owner_desc(projectPost.getProj_owner_desc());
		project.setProj_owner_propic(projectPost.getProj_owner_propic());

		project.setDepartment(department);
		projectRepository.save(project);
		
		return project;
	}

	@Override
	public List<Project> searchProject(String proj_name) {
		
		return projectRepository.searchProjectR(proj_name);
	}
	
	
	
	
	

}
