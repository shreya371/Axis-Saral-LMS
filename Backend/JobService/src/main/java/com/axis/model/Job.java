package com.axis.model;

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
@Table(name="job_opportunities")
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int jopp_id;
	@Column(nullable=false)
	private String jopp_name;
	@Column(nullable=false)
	private String jopp_title;
	@Column(nullable=false,length=5000)
	private String jopp_desc;
	@Column(nullable=false)
	private int joop_vacancies;
	@Column(nullable=false)
	private String jopp_skills;
	@Column(nullable=false)
	private float jopp_exp;
	@Column(nullable=false)
	private int jopp_team;
	
	@Column(nullable=false)
	private String jopp_shift;
	
	@Column(nullable=false)
	private String jopp_location;
	
	
	
	
	@Column(nullable=false)
	private double jopp_slary;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="project_proj_id",referencedColumnName="proj_id")
	private Project project;

	public int getJopp_id() {
		return jopp_id;
	}

	public void setJopp_id(int jopp_id) {
		this.jopp_id = jopp_id;
	}

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

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Job(String jopp_name, String jopp_title, String jopp_desc, int joop_vacancies, String jopp_skills,
			float jopp_exp, int jopp_team, String jopp_shift, String jopp_location, double jopp_slary,
			Project project) {
		super();
		this.jopp_name = jopp_name;
		this.jopp_title = jopp_title;
		this.jopp_desc = jopp_desc;
		this.joop_vacancies = joop_vacancies;
		this.jopp_skills = jopp_skills;
		this.jopp_exp = jopp_exp;
		this.jopp_team = jopp_team;
		this.jopp_shift = jopp_shift;
		this.jopp_location = jopp_location;
		
		this.jopp_slary = jopp_slary;
		this.project = project;
	}

	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

	
	
	
}
