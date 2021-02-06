package com.cdac.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	private String userName;
	private String userPassword;
	private String userAddress;

    @Column(unique=true)
	private String userEmailId;
	private String userContactNo;
	private String userType;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String userName, String userPassword, String userAddress, String userEmailId, String userContactNo, String userType) {
		super();
		this.userName = userName;
		this.userPassword = userPassword;
		this.userAddress = userAddress;
		this.userEmailId = userEmailId;
		this.userContactNo = userContactNo;
		this.userType = userType;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserEmailId() {
		return userEmailId;
	}

	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}

	public String getUserContactNo() {
		return userContactNo;
	}

	public void setUserContactNo(String userContactNo) {
		this.userContactNo = userContactNo;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return userId + " " + userName + " " + userPassword + " "
				+ userAddress + " " + userEmailId + " " + userContactNo + " " + userType;
	}	
}
