package com.axis.exception;

public class PostNotFoundException extends RuntimeException {

	String msg;

	public PostNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	
}
