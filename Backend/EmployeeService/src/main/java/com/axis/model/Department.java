package com.axis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "department")
public class Department {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int dept_id;
	
//	@Column(nullable=false,unique=true)
	@Column(nullable=false)
	private String dept_name;
	@Column(nullable=false)
	private String dept_code;
	@Column(nullable=false)
	private String dept_desc;
	
	
	
	public int getDept_id() {
		return dept_id;
	}
	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}
	public String getDept_name() {
		return dept_name;
	}
	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}
	public String getDept_code() {
		return dept_code;
	}
	public void setDept_code(String dept_code) {
		this.dept_code = dept_code;
	}
	public String getDept_desc() {
		return dept_desc;
	}
	public void setDept_desc(String dept_desc) {
		this.dept_desc = dept_desc;
	}
	public Department(String dept_name, String dept_code, String dept_desc) {
		super();
		this.dept_name = dept_name;
		this.dept_code = dept_code;
		this.dept_desc = dept_desc;
	}
	@Override
	public String toString() {
		return "Department [dept_id=" + dept_id + ", dept_name=" + dept_name + ", dept_code=" + dept_code
				+ ", dept_desc=" + dept_desc + "]";
	}
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
	

}
