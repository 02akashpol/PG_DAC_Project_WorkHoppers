package com.cdac.service;


import com.cdac.dto.User;

import java.util.List;

import com.cdac.dto.ContactUs;
import com.cdac.dto.Job;

public interface UserService {

	public String registration(User user);
	public User logIn(User user);
	public User fetchUserData(String userEmailId);
	
	public String submit(ContactUs contactUs);

	public String deleteUser(long userId);
	public List<User> getAll();

	public List<Job> getAllJobs();
	public String deleteJob(int jobId);
	
	public User getProfile(Long userId);
	public int updateProfile(User user);
	public String deleteProfile(Long userId);
	
}
