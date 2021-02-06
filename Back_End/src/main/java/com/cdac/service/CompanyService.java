package com.cdac.service;

import java.util.List;

import com.cdac.dto.Job;

public interface CompanyService {
	
	public String addJob(Job job);
	public String updateJob(Job job);
	public String deleteJob(int jobId);
	public List<Job> getCompanyjobOffers(int companyId);
}
