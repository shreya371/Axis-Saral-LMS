package com.axis.exception;

public class StakeHolderNotFoundException extends RuntimeException {

	String msg;

	public StakeHolderNotFoundException(String msg) {
		super();
		this.msg = msg;
	}
	public String getMsg() {
		return msg;
	}
	
}
