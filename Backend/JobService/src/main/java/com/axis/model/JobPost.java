package com.axis.model;

import jakarta.persistence.Column;

public class JobPost {

	private String jopp_name;

	private String jopp_title;
	
	private String jopp_desc;

	private int joop_vacancies;

	private String jopp_skills;

	private float jopp_exp;

	private int jopp_team;
	
	
	private String jopp_shift;
	

	private String jopp_location;
	
	
	private double jopp_slary;


	public String getJopp_name() {
		return jopp_name;
	}


	public void setJopp_name(String jopp_name) {
		this.jopp_name = jopp_name;
	}


	public String getJopp_title() {
		return jopp_title;
	}


	public void setJopp_title(String jopp_title) {
		this.jopp_title = jopp_title;
	}


	public String getJopp_desc() {
		return jopp_desc;
	}


	public void setJopp_desc(String jopp_desc) {
		this.jopp_desc = jopp_desc;
	}


	public int getJoop_vacancies() {
		return joop_vacancies;
	}


	public void setJoop_vacancies(int joop_vacancies) {
		this.joop_vacancies = joop_vacancies;
	}


	public String getJopp_skills() {
		return jopp_skills;
	}


	public void setJopp_skills(String jopp_skills) {
		this.jopp_skills = jopp_skills;
	}


	public float getJopp_exp() {
		return jopp_exp;
	}


	public void setJopp_exp(float jopp_exp) {
		this.jopp_exp = jopp_exp;
	}


	public int getJopp_team() {
		return jopp_team;
	}


	public void setJopp_team(int jopp_team) {
		this.jopp_team = jopp_team;
	}


	public String getJopp_shift() {
		return jopp_shift;
	}


	public void setJopp_shift(String jopp_shift) {
		this.jopp_shift = jopp_shift;
	}


	public String getJopp_location() {
		return jopp_location;
	}


	public void setJopp_location(String jopp_location) {
		this.jopp_location = jopp_location;
	}


	public double getJopp_slary() {
		return jopp_slary;
	}


	public void setJopp_slary(double jopp_slary) {
		this.jopp_slary = jopp_slary;
	}
	
	
}
