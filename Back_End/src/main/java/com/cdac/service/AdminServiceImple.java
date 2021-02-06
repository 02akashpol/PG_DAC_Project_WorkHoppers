package com.cdac.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dto.Job;
import com.cdac.dto.User;
import com.cdac.repo.JobRepository;
import com.cdac.repo.UserRepository;

@Service
public class AdminServiceImple implements AdminService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private JobRepository jobRepo;
	
	@Override
	public String deleteJob(int jobId) {

		try {
			
			jobRepo.deleteById(jobId);
			return "Job offer has been deleted successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
		
	}

	@Override
	public List<User> getUserRecords() {

		try {

			Iterable<User> itr = userRepo.findAll();
			Iterator<User> it = itr.iterator();
			List<User> li= new ArrayList<User>();
			while(it.hasNext()) {
				li.add(it.next());
			}
			
			return li;
			
		} catch(Exception exp) {
			
			return null;
		}
	}
	
	public List<Job> getJobRecords() {

		try {

			Iterable<Job> itr = jobRepo.findAll();
			Iterator<Job> it = itr.iterator();
			List<Job> li= new ArrayList<Job>();
			while(it.hasNext()) {
				li.add(it.next());
			}
			
			return li;
			
		} catch(Exception exp) {
			
			return null;
		}
	}
}

/*
try {
	
	
} catch(Exception exp) {
	
	return null;
}
*/
