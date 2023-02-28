package com.axis.exception;

public class ProjMangerNotFoundException extends RuntimeException {

	String msg;

	public ProjMangerNotFoundException(String msg) {
		super();
		this.msg = msg;
	}
	public String getMsg() {
		return msg;
	}
	
}
