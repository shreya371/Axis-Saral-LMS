package com.axis.exception;

public class EmptyListException extends RuntimeException{

	String msg;

	public EmptyListException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
	
}
