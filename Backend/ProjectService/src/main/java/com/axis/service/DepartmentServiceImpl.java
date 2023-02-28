package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.DeptNotFoundException;
import com.axis.model.Department;
import com.axis.repository.DepartmentRepository;
import com.axis.util.AppConstants;

@Service
public class DepartmentServiceImpl implements DepartmentService{
	
	@Autowired
	DepartmentRepository departmentRepository;

	@Override
	public List<Department> getAllDepts() {
		// TODO Auto-generated method stub
		List<Department> dept=departmentRepository.findAll();
		if(dept.size()==0) {
			throw new DeptNotFoundException(AppConstants.Dept_Not_Found_Message);
		}
		return dept;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	@Override
	public Optional<Department> getDept(int dept_id) {
		// TODO Auto-generated method stub
		return departmentRepository.findById(dept_id);//1)deptnot found exception 2)return department
	}

}
