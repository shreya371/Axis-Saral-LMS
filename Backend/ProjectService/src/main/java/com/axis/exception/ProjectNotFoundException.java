package com.axis.exception;

public class ProjectNotFoundException extends RuntimeException{

	String msg;

	public ProjectNotFoundException(String msg) {
		super();
		this.msg = msg;
	}
	public String getMsg() {
		return msg;
	}
	
}
