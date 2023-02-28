package com.axis.model;

import java.sql.Date;
import java.time.LocalDate;

public class ProjectPost {

	private String proj_name;
	private String proj_code;
	private String proj_desc;
	private Date  proj_startdate;
	private String proj_status;
	private Date proj_enddate;
	
	private String proj_pic;
	private String proj_flowchart;
	private String proj_owner_code;
	private String proj_owner_name;
	private String proj_owner_desc;
	private String proj_owner_propic;
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


	
	

}
