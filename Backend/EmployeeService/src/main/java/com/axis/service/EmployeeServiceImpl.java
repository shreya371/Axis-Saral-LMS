package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.feignclient.ProjectClient;
import com.axis.model.Employee;
import com.axis.model.EmployeePost;
import com.axis.model.Login;
import com.axis.model.Project;
import com.axis.model.ProjectManager;
import com.axis.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	EmployeeRepository employeeRepository;
	
//	@Autowired
//	ProjectRepository projectRepository;
	@Autowired
	ProjectClient projectClient;
	
	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(int empl_id) {
		
		return employeeRepository.findById(empl_id).orElse(null);
	}
	
	@Override
	public List<Employee> getEmployeesByRole(String empl_role) {
		// TODO Auto-generated method stub
		return employeeRepository.getAllByRole(empl_role);
	}
	
	
	
	//-----------------------------------------------------------

	@Override
	public List<Employee> getEmployeesByTeam(int empl_team) {
		// TODO Auto-generated method stub
		return employeeRepository.getAllByTeam(empl_team);
	}

	@Override
	public List<Employee> getEmployeesByProject(int proj_id) {
		// TODO Auto-generated method stub
		return employeeRepository.getAllByProjectId(proj_id);
	}
	
	
	@Override
	public List<Employee> getEmployeesByName(String empl_name) {
		// TODO Auto-generated method stub
		return employeeRepository.getAllByName(empl_name);
	}

	@Override
	public Employee postEmployee(EmployeePost employeePost, int proj_id) {
		// TODO Auto-generated method stub
		//GET PROJECT BY ID USE FIENG CLIENT FOR THAT METHOD
		Project project = projectClient.getOneProjectById(proj_id);
		ProjectManager pm=projectClient.getOnePmng(proj_id);
		Employee employee=new Employee();
		
		employee.setEmpl_name(employeePost.getEmpl_name());
		employee.setEmpl_code(employeePost.getEmpl_code());
		employee.setEmpl_role(employeePost.getEmpl_role());
		employee.setEmpl_email(employeePost.getEmpl_email());
		employee.setEmpl_contact(employeePost.getEmpl_contact());
		employee.setEmpl_uname(employeePost.getEmpl_uname());
		employee.setEmpl_pswd(employeePost.getEmpl_pswd());
		employee.setEmpl_exp(employeePost.getEmpl_exp());
		employee.setEmpl_team(employeePost.getEmpl_team());
		employee.setEmpl_salary(employeePost.getEmpl_salary());
		employee.setEmpl_address(employeePost.getEmpl_address());
		employee.setEmpl_location(employeePost.getEmpl_location());
		employee.setEmpl_dob(employeePost.getEmpl_dob());
		employee.setEmpl_gender(employeePost.getEmpl_gender());
		employee.setProject(project);
		employee.setProjectManager(pm);
		employeeRepository.save(employee);
		return employee;
	}

	@Override
	public String validate(Login login) {
		List<Employee> emp= employeeRepository.validateR(login.getLogin_email());
		if(emp.size()==1) {
			String email=login.getLogin_email();
			String password=login.getLogin_password();
			for (Employee employee : emp) {
				if(employee.getEmpl_email().equals(email) && employee.getEmpl_pswd().equals(password)) {
					return "valid";
				
			}
				
				
			}
			
			
		}
		
		
		return "not valid";
	}

	@Override
	public Employee getEmployee(String empl_email) {
		// TODO Auto-generated method stub
		
		List<Employee> empl=employeeRepository.getEmployeeR(empl_email);
		if(empl.size()==1) {
			for (Employee employee : empl) {
				return employee;

			}
			
		}
		return null;
		
	}
	
	

}
