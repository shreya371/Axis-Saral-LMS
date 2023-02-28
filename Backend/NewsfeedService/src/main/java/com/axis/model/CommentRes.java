package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CommentRes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cmtres_id;
	
	private String empl_name;
	private String ecmt_content;
	
	
	private String empl_role;
	private int epost_id;
	public int getCmtres_id() {
		return cmtres_id;
	}
	public void setCmtres_id(int cmtres_id) {
		this.cmtres_id = cmtres_id;
	}
	public String getEmpl_name() {
		return empl_name;
	}
	public void setEmpl_name(String empl_name) {
		this.empl_name = empl_name;
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
	public int getEpost_id() {
		return epost_id;
	}
	public void setEpost_id(int epost_id) {
		this.epost_id = epost_id;
	}
	public CommentRes(int cmtres_id, String empl_name, String ecmt_content, String empl_role, int epost_id) {
		super();
		this.cmtres_id = cmtres_id;
		this.empl_name = empl_name;
		this.ecmt_content = ecmt_content;
		this.empl_role = empl_role;
		this.epost_id = epost_id;
	}
	public CommentRes() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	


	
	
	

}
