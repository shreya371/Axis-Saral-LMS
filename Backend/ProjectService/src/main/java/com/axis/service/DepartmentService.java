package com.axis.service;

import java.util.List;
import java.util.Optional;

import com.axis.model.Department;

public interface DepartmentService {

	public List<Department> getAllDepts();

	public Optional<Department> getDept(int dept_id);

}
