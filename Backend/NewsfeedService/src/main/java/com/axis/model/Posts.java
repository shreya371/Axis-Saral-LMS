package com.axis.model;

import java.sql.Date;
import java.time.LocalDate;

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
@Table(name="employee_post")
public class Posts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int epost_id;
	@Column(nullable=false,length=5000)
	private String epost_content;
//	@Column(nullable=false)
//	private Date epost_datetime;
	@Column(nullable=false)
	private int epost_likes =0;
	@Column(nullable=false)
	private String epost_category;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="employee_empl_id",referencedColumnName = "empl_id")
	private Employee employee;

	public int getEpost_id() {
		return epost_id;
	}

	public void setEpost_id(int epost_id) {
		this.epost_id = epost_id;
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
//
//	public void setEpost_datetime(Date epost_datetime) {
//		this.epost_datetime = epost_datetime;
//	}

	public int getEpost_likes() {
		return epost_likes;
	}

	public void setEpost_likes(int epost_likes) {
		this.epost_likes = epost_likes;
	}

	public String getEpost_category() {
		return epost_category;
	}

	public void setEpost_category(String epost_category) {
		this.epost_category = epost_category;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Posts(int epost_id, String epost_content,  int epost_likes, String epost_category,
			Employee employee) {
		super();
		this.epost_id = epost_id;
		this.epost_content = epost_content;
//		this.epost_datetime = epost_datetime;
		this.epost_likes = epost_likes;
		this.epost_category = epost_category;
		this.employee = employee;
	}

	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	
	
	
}
