package com.axis.model;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class CommentResponse {
	@Id
	public String empl_name;
	public Date ecmt_datetime;
	public String ecmt_content;
	public String empl_role;
	public String getEmpl_name() {
		return empl_name;
	}
	public void setEmpl_name(String empl_name) {
		this.empl_name = empl_name;
	}
	public Date getEcmt_datetime() {
		return ecmt_datetime;
	}
	public void setEcmt_datetime(Date ecmt_datetime) {
		this.ecmt_datetime = ecmt_datetime;
	}
	public String getEcmt_content() {
		return ecmt_content;
	}
	public void setEcmt_content(String ecmt_content) {
		this.ecmt_content = ecmt_content;
	}
	public String getEmpl_role() {
		return empl_role;
	}
	public void setEmpl_role(String empl_role) {
		this.empl_role = empl_role;
	}
	public CommentResponse(String empl_name, Date ecmt_datetime, String ecmt_content, String empl_role) {
		super();
		this.empl_name = empl_name;
		this.ecmt_datetime = ecmt_datetime;
		this.ecmt_content = ecmt_content;
		this.empl_role = empl_role;
	}
	public CommentResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CommentResponse [empl_name=" + empl_name + ", ecmt_datetime=" + ecmt_datetime + ", ecmt_content="
				+ ecmt_content + ", empl_role=" + empl_role + "]";
	}
	
	
}
