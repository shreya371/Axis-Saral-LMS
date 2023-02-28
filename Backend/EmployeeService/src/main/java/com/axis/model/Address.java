//package com.axis.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "address")
//public class Address {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int add_id;
//	
//	private String add_hno;
//	
//	private String add_street;
//	
//	private String add_city;
//	
//	private String add_state;
//	
//	private int  add_pin;
//	
//	private String country;
//	@OneToOne(fetch=FetchType.EAGER)
//    @JoinColumn(name="employee_empl_id" ,referencedColumnName="empl_id")
//	private Employee employee;
//}
