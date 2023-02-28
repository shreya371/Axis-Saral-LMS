package com.axis.exception;

public class JobNotFoundException extends RuntimeException{

	String msg;

	public JobNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	
}
