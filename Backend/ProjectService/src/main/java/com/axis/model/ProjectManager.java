package com.axis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "project_manager")
public class ProjectManager {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pmng_id;
	@Column(nullable=false)
	private String pmng_name;
	@Column(nullable=false)
	private String pmng_desg;
	@Column(nullable=false)
	private String pmng_email;
	@Column(nullable = false)
	private String pmng_contact;
	@Column(nullable=false)
	private String pmng_uname;
	@Column(nullable=false)
	private String pmng_pswd;
	@Column(nullable=false)
	private float pmng_exp;
	
	@Column(nullable=false)
	private double pmng_salary;
	@Column(nullable=false)
	private String pmng_propic;
	


	@OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(nullable=false,unique=true,name="project_proj_id" ,referencedColumnName="proj_id")
	private Project project;



	public int getPmng_id() {
		return pmng_id;
	}



	public void setPmng_id(int pmng_id) {
		this.pmng_id = pmng_id;
	}



	public String getPmng_name() {
		return pmng_name;
	}



	public void setPmng_name(String pmng_name) {
		this.pmng_name = pmng_name;
	}



	public String getPmng_desg() {
		return pmng_desg;
	}



	public void setPmng_desg(String pmng_desg) {
		this.pmng_desg = pmng_desg;
	}



	public String getPmng_email() {
		return pmng_email;
	}



	public void setPmng_email(String pmng_email) {
		this.pmng_email = pmng_email;
	}



	public String getPmng_contact() {
		return pmng_contact;
	}



	public void setPmng_contact(String pmng_contact) {
		this.pmng_contact = pmng_contact;
	}



	public String getPmng_uname() {
		return pmng_uname;
	}



	public void setPmng_uname(String pmng_uname) {
		this.pmng_uname = pmng_uname;
	}



	public String getPmng_pswd() {
		return pmng_pswd;
	}



	public void setPmng_pswd(String pmng_pswd) {
		this.pmng_pswd = pmng_pswd;
	}



	public float getPmng_exp() {
		return pmng_exp;
	}



	public void setPmng_exp(float pmng_exp) {
		this.pmng_exp = pmng_exp;
	}



	public double getPmng_salary() {
		return pmng_salary;
	}



	public void setPmng_salary(double pmng_salary) {
		this.pmng_salary = pmng_salary;
	}



	public String getPmng_propic() {
		return pmng_propic;
	}



	public void setPmng_propic(String pmng_propic) {
		this.pmng_propic = pmng_propic;
	}



	public Project getProject() {
		return project;
	}



	public void setProject(Project project) {
		this.project = project;
	}



	public ProjectManager(String pmng_name, String pmng_desg, String pmng_email, String pmng_contact, String pmng_uname,
			String pmng_pswd, float pmng_exp, double pmng_salary, String pmng_propic, Project project) {
		super();
		this.pmng_name = pmng_name;
		this.pmng_desg = pmng_desg;
		this.pmng_email = pmng_email;
		this.pmng_contact = pmng_contact;
		this.pmng_uname = pmng_uname;
		this.pmng_pswd = pmng_pswd;
		this.pmng_exp = pmng_exp;
		this.pmng_salary = pmng_salary;
		this.pmng_propic = pmng_propic;
		this.project = project;
	}



	public ProjectManager() {
		super();
		// TODO Auto-generated constructor stub
	}



	


	
	
	
	
	

}
