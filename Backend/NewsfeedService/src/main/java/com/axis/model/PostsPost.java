package com.axis.model;

import java.sql.Date;
import java.time.LocalDate;

public class PostsPost {

	private int epost_id;
	private String epost_content;
//	private Date epost_datetime ;
	private int epost_likes =0;
	private String epost_category="news feed";
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
		
	
	
	

}
