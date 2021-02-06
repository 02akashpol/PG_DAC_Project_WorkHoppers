package com.cdac.service;

import java.util.List;

import com.cdac.dto.Job;
import com.cdac.dto.User;

public interface AdminService {

	public String deleteJob(int jobId);
	public List<User> getUserRecords();
	public List<Job> getJobRecords();

}