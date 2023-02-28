package com.axis.model;

import jakarta.persistence.Column;

public class StakeHolderPost {
	

	private String sthd_name;

	private String sthd_code;

	private String sthd_desg;
	
	private String sthd_propic;

	private String sthd_email;

	private String sthd_contact;

	

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
	
	

}
