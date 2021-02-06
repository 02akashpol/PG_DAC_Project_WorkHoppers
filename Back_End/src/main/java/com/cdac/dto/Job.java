package com.cdac.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Job {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int jobId;
	private String jobTitle;
	private String jobExperience;
	private int jobVacancy;
	private String jobDescription;
	private int companyId;
	
	
	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}


	 public Job(int jobId, String jobTitle, String jobExperience, int jobVacancy, String jobDescription, int companyId) {
		super();
		this.jobId = jobId;
		this.jobTitle = jobTitle;
		this.jobExperience = jobExperience;
		this.jobVacancy = jobVacancy;
		this.jobDescription = jobDescription;
		this.companyId = companyId;
	}


	public int getJobId() {
		return jobId;
	}


	public void setJobId(int jobId) {
		this.jobId = jobId;
	}


	public String getJobTitle() {
		return jobTitle;
	}


	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}


	public String getJobExperience() {
		return jobExperience;
	}


	public void setJobExperience(String jobExperience) {
		this.jobExperience = jobExperience;
	}


	public int getJobVacancy() {
		return jobVacancy;
	}


	public void setJobVacancy(int jobVacancy) {
		this.jobVacancy = jobVacancy;
	}


	public String getJobDescription() {
		return jobDescription;
	}


	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public int getCompanyId() {
		return companyId;
	}


	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	@Override
	public String toString() {
		return jobId +" " +jobTitle + " "+jobExperience+ " " +jobVacancy+ " " +jobDescription+ " "+companyId;
	}
	 

}