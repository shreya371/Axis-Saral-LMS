package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.feignclient.ProjectClient;
import com.axis.model.Employee;
import com.axis.model.EmployeePost;
import com.axis.model.Login;
import com.axis.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ms2")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@Autowired
	ProjectClient projectClient;
	
	//-------get all employees----------
	@GetMapping("/empl/g1")
	public ResponseEntity<List<Employee>> getAllEmployees()
	{
		List<Employee> employees = employeeService.getAllEmployees();
		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}
	
	//----------get one employee by id--------
	@GetMapping("/empl/g2/{empl_id}")
	public Employee getEmployeeById(@PathVariable int empl_id)
	{
		
		return employeeService.getEmployeeById(empl_id);
	}
	
	
	//----------get employees by role-------------
	@GetMapping("/empl/g3/{empl_role}")
	public List<Employee> getEmployeeByRole(@PathVariable String empl_role)
	{
		return  employeeService.getEmployeesByRole(empl_role);
		
	}
	
	//-----------get all employees by teams------------
	@GetMapping("/empl/g4/{empl_team}")
	public List<Employee> getEmployeeByTeam(@PathVariable int empl_team)
	{
		
		return employeeService.getEmployeesByTeam(empl_team);
	}
	
	
	//-------get all employees by project id----------------
	@GetMapping("/empl/g5/{proj_id}")
	public List<Employee> getEmployeeByProject(@PathVariable int proj_id)
	{
		return employeeService.getEmployeesByProject(proj_id);
	 
	}
	
	
	
	//--------------get all employees by name------------
	@GetMapping("/empl/g6/{empl_name}")
	public List<Employee> getEmployeeByName(@PathVariable String empl_name)
	{
		return employeeService.getEmployeesByName(empl_name);
		 
	}


	
	//role, list -----
	//projectid,list ---------
	//team//list -------
	//name//employee
	
	//-------------post employee------------
	@PostMapping("/empl/post/{proj_id}")
	public Employee postEmployee(@RequestBody EmployeePost employeePost,@PathVariable int proj_id) {
		return employeeService.postEmployee(employeePost,proj_id);
		
		
	}
	
	//login 
	@PostMapping("/validate")
	public String validate(@RequestBody Login login ) {
		return employeeService.validate(login);
		
	}
	
	@GetMapping("/employee/{empl_email}")
	public Employee getEmployee(@PathVariable String empl_email) {
		return employeeService.getEmployee(empl_email);
	}
	

	
	



}
