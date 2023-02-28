package com.axis.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int proj_id;
	
	@Column(nullable=false)
	private String proj_name;
	
	@Column(nullable=false)
	private String proj_code;
	
	@Column(nullable=false,length=5000)
	private String proj_desc;
	
	@Column(nullable=false)
	private Date  proj_startdate;
	
	@Column(nullable=false)
	private String proj_status;
	
	@Column(nullable=false)
	private Date proj_enddate;
	
	@Column(nullable=false)
	private String proj_pic;
	
	@Column(nullable=false)
	private String proj_flowchart;
	
	@Column(nullable=false)
	private String proj_owner_code;
	
	@Column(nullable=false)
	private String proj_owner_name;
	
	@Column(nullable=false,length=5000)
	private String proj_owner_desc;
	
	@Column(nullable=false)
	private String proj_owner_propic;

	@ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="department_dept_id" ,referencedColumnName="dept_id")
	private Department department;

	public int getProj_id() {
		return proj_id;
	}

	public void setProj_id(int proj_id) {
		this.proj_id = proj_id;
	}

	public String getProj_name() {
		return proj_name;
	}

	public void setProj_name(String proj_name) {
		this.proj_name = proj_name;
	}

	public String getProj_code() {
		return proj_code;
	}

	public void setProj_code(String proj_code) {
		this.proj_code = proj_code;
	}

	public String getProj_desc() {
		return proj_desc;
	}

	public void setProj_desc(String proj_desc) {
		this.proj_desc = proj_desc;
	}

	public Date getProj_startdate() {
		return proj_startdate;
	}

	public void setProj_startdate(Date proj_startdate) {
		this.proj_startdate = proj_startdate;
	}

	public String getProj_status() {
		return proj_status;
	}

	public void setProj_status(String proj_status) {
		this.proj_status = proj_status;
	}

	public Date getProj_enddate() {
		return proj_enddate;
	}

	public void setProj_enddate(Date proj_enddate) {
		this.proj_enddate = proj_enddate;
	}

	public String getProj_pic() {
		return proj_pic;
	}

	public void setProj_pic(String proj_pic) {
		this.proj_pic = proj_pic;
	}

	public String getProj_flowchart() {
		return proj_flowchart;
	}

	public void setProj_flowchart(String proj_flowchart) {
		this.proj_flowchart = proj_flowchart;
	}

	public String getProj_owner_code() {
		return proj_owner_code;
	}

	public void setProj_owner_code(String proj_owner_code) {
		this.proj_owner_code = proj_owner_code;
	}

	public String getProj_owner_name() {
		return proj_owner_name;
	}

	public void setProj_owner_name(String proj_owner_name) {
		this.proj_owner_name = proj_owner_name;
	}

	public String getProj_owner_desc() {
		return proj_owner_desc;
	}

	public void setProj_owner_desc(String proj_owner_desc) {
		this.proj_owner_desc = proj_owner_desc;
	}

	public String getProj_owner_propic() {
		return proj_owner_propic;
	}

	public void setProj_owner_propic(String proj_owner_propic) {
		this.proj_owner_propic = proj_owner_propic;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public Project(String proj_name, String proj_code, String proj_desc, Date proj_startdate, String proj_status,
			Date proj_enddate, String proj_pic, String proj_flowchart, String proj_owner_code, String proj_owner_name,
			String proj_owner_desc, String proj_owner_propic, Department department) {
		super();
		this.proj_name = proj_name;
		this.proj_code = proj_code;
		this.proj_desc = proj_desc;
		this.proj_startdate = proj_startdate;
		this.proj_status = proj_status;
		this.proj_enddate = proj_enddate;
		this.proj_pic = proj_pic;
		this.proj_flowchart = proj_flowchart;
		this.proj_owner_code = proj_owner_code;
		this.proj_owner_name = proj_owner_name;
		this.proj_owner_desc = proj_owner_desc;
		this.proj_owner_propic = proj_owner_propic;
		this.department = department;
	}

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
