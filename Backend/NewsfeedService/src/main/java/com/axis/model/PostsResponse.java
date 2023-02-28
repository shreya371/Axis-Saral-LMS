package com.axis.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PostsResponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int  postres_id;
	
	private String empl_name;
	private int epost_id;
	private String empl_role;
	private String epost_content;
//	private Date epost_datetime;
	public int getPostres_id() {
		return postres_id;
	}
	public void setPostres_id(int postres_id) {
		this.postres_id = postres_id;
	}
	public String getEmpl_name() {
		return empl_name;
	}
	public void setEmpl_name(String empl_name) {
		this.empl_name = empl_name;
	}
	public int getEpost_id() {
		return epost_id;
	}
	public void setEpost_id(int epost_id) {
		this.epost_id = epost_id;
	}
	public String getEmpl_role() {
		return empl_role;
	}
	public void setEmpl_role(String empl_role) {
		this.empl_role = empl_role;
	}
	public String getEpost_content() {
		return epost_content;
	}
	public void setEpost_content(String epost_content) {
		this.epost_content = epost_content;
	}
//	public Date getEpost_datetime() {
//		return epost_datetime;
//	}
//	public void setEpost_datetime(Date epost_datetime) {
//		this.epost_datetime = epost_datetime;
//	}
	public PostsResponse(int postres_id, String empl_name, int epost_id, String empl_role, String epost_content
			) {
		super();
		this.postres_id = postres_id;
		this.empl_name = empl_name;
		this.epost_id = epost_id;
		this.empl_role = empl_role;
		this.epost_content = epost_content;
//		this.epost_datetime = epost_datetime;
	}
	public PostsResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	
	
	
	
	
}
