package com.axis.exception;

public class DeptNotFoundException extends RuntimeException {

	String msg;

	public DeptNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
	
}
