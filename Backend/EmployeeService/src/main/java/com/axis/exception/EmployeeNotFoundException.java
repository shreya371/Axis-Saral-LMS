package com.axis.exception;

public class EmployeeNotFoundException extends RuntimeException{

	String msg;

	public EmployeeNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
}
