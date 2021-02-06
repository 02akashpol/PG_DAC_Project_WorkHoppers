package com.cdac.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ContactUs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int contactId;
	
	private String description;
	
	@Column(unique=true)
	private String email;
	
	private String name;

	public ContactUs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ContactUs(String description, String email, String name) {
		super();
		this.description = description;
		this.email = email;
		this.name = name;
	}

	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return contactId + " "  + description + " " + email + " "+ name ;
	}

	
}