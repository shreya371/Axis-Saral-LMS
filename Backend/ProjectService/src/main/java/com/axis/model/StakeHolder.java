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
@Table(name = "stake_holders")
public class StakeHolder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sthd_id;
	@Column(nullable=false)
	private String sthd_name;
	@Column(nullable=false)
	private String sthd_code;
	@Column(nullable=false)
	private String sthd_desg;
	@Column(nullable=false)
	private String sthd_propic;
	@Column(nullable=false)
	private String sthd_email;
	@Column(nullable=false)
	private String sthd_contact;
	
	
	@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="project_proj_id" ,referencedColumnName="proj_id")
	private Project project;


	public int getSthd_id() {
		return sthd_id;
	}


	public void setSthd_id(int sthd_id) {
		this.sthd_id = sthd_id;
	}


	public String getSthd_name() {
		return sthd_name;
	}


	public void setSthd_name(String sthd_name) {
		this.sthd_name = sthd_name;
	}


	public String getSthd_code() {
		return sthd_code;
	}


	public void setSthd_code(String sthd_code) {
		this.sthd_code = sthd_code;
	}


	public String getSthd_desg() {
		return sthd_desg;
	}


	public void setSthd_desg(String sthd_desg) {
		this.sthd_desg = sthd_desg;
	}


	public String getSthd_propic() {
		return sthd_propic;
	}


	public void setSthd_propic(String sthd_propic) {
		this.sthd_propic = sthd_propic;
	}


	public String getSthd_email() {
		return sthd_email;
	}


	public void setSthd_email(String sthd_email) {
		this.sthd_email = sthd_email;
	}


	public String getSthd_contact() {
		return sthd_contact;
	}


	public void setSthd_contact(String sthd_contact) {
		this.sthd_contact = sthd_contact;
	}


	public Project getProject() {
		return project;
	}


	public void setProject(Project project) {
		this.project = project;
	}


	public StakeHolder(String sthd_name, String sthd_code, String sthd_desg, String sthd_propic, String sthd_email,
			String sthd_contact, Project project) {
		super();
		this.sthd_name = sthd_name;
		this.sthd_code = sthd_code;
		this.sthd_desg = sthd_desg;
		this.sthd_propic = sthd_propic;
		this.sthd_email = sthd_email;
		this.sthd_contact = sthd_contact;
		this.project = project;
	}


	public StakeHolder() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "StakeHolder [sthd_id=" + sthd_id + ", sthd_name=" + sthd_name + ", sthd_code=" + sthd_code
				+ ", sthd_desg=" + sthd_desg + ", sthd_propic=" + sthd_propic + ", sthd_email=" + sthd_email
				+ ", sthd_contact=" + sthd_contact + ", project=" + project + "]";
	}

	

	
	
	

}
