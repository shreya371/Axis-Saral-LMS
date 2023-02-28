package com.axis.model;

import java.sql.Date;

import jakarta.persistence.Column;

public class EmployeePost {

	private String empl_name;
	private String empl_code;
	private String empl_role;
	private String empl_email;
	private String empl_contact;
	private String empl_uname;
	private String empl_pswd;
	private float empl_exp;
	private int empl_team;
	private int empl_salary;
	private String empl_address;
	private String empl_location;

	private String empl_gender;
	


	private Date empl_dob;
	public String getEmpl_location() {
		return empl_location;
	}
	public void setEmpl_location(String empl_location) {
		this.empl_location = empl_location;
	}
	public String getEmpl_address() {
		return empl_address;
	}
	public void setEmpl_address(String empl_address) {
		this.empl_address = empl_address;
	}

	public String getEmpl_name() {
		return empl_name;
	}
	public void setEmpl_name(String empl_name) {
		this.empl_name = empl_name;
	}
	public String getEmpl_code() {
		return empl_code;
	}
	public void setEmpl_code(String empl_code) {
		this.empl_code = empl_code;
	}
	public String getEmpl_role() {
		return empl_role;
	}
	public void setEmpl_role(String empl_role) {
		this.empl_role = empl_role;
	}
	public String getEmpl_email() {
		return empl_email;
	}
	public void setEmpl_email(String empl_email) {
		this.empl_email = empl_email;
	}
	public String getEmpl_contact() {
		return empl_contact;
	}
	public void setEmpl_contact(String empl_contact) {
		this.empl_contact = empl_contact;
	}
	public String getEmpl_uname() {
		return empl_uname;
	}
	public void setEmpl_uname(String empl_uname) {
		this.empl_uname = empl_uname;
	}
	public String getEmpl_pswd() {
		return empl_pswd;
	}
	public void setEmpl_pswd(String empl_pswd) {
		this.empl_pswd = empl_pswd;
	}
	public float getEmpl_exp() {
		return empl_exp;
	}
	public void setEmpl_exp(float empl_exp) {
		this.empl_exp = empl_exp;
	}
	public int getEmpl_team() {
		return empl_team;
	}
	public void setEmpl_team(int empl_team) {
		this.empl_team = empl_team;
	}
	public int getEmpl_salary() {
		return empl_salary;
	}
	public void setEmpl_salary(int empl_salary) {
		this.empl_salary = empl_salary;
	}
	public String getEmpl_gender() {
		return empl_gender;
	}
	public void setEmpl_gender(String empl_gender) {
		this.empl_gender = empl_gender;
	}
	public Date getEmpl_dob() {
		return empl_dob;
	}
	public void setEmpl_dob(Date empl_dob) {
		this.empl_dob = empl_dob;
	}
	
	

}
