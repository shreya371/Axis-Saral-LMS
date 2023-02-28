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
@Table(name="ecomment")
@Entity
public class Comments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ecmt_id;
	@Column(nullable=false)
	private String ecmt_content;
	
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="ecomment_empl_id",referencedColumnName = "empl_id")
	private Employee employee;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="employee_post_epost_id",referencedColumnName = "epost_id")
	private Posts post;
	public int getEcmt_id() {
		return ecmt_id;
	}
	public void setEcmt_id(int ecmt_id) {
		this.ecmt_id = ecmt_id;
	}
	public String getEcmt_content() {
		return ecmt_content;
	}
	public void setEcmt_content(String ecmt_content) {
		this.ecmt_content = ecmt_content;
	}
	
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Posts getPost() {
		return post;
	}
	public void setPost(Posts post) {
		this.post = post;
	}
	public Comments(int ecmt_id, String ecmt_content, Employee employee, Posts post) {
		super();
		this.ecmt_id = ecmt_id;
		this.ecmt_content = ecmt_content;
	
		this.employee = employee;
		this.post = post;
	}
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
		
	
		
	
}
