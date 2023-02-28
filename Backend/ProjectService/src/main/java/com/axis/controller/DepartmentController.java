package com.axis.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Department;
import com.axis.service.DepartmentService;

@RestController
@RequestMapping("/ms1")
public class DepartmentController {
	
	@Autowired
	DepartmentService departmentService;
	
	
	//-------------get all departments --------------------------
	@GetMapping("/dept/g1")
	public List<Department> getAllDepts(){
		
		return departmentService.getAllDepts();
	}
	
	//-----------------get single department by department id---------------
	
	@GetMapping("/dept/g2/{dept_id}")
	public Optional<Department> getDept(@PathVariable int dept_id) {
		return departmentService.getDept(dept_id);
	}
	
	

}
