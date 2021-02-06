package com.cdac.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dto.Job;
import com.cdac.dto.User;
import com.cdac.repo.JobRepository;

@Service
public class CompanyServiceImple implements CompanyService {
	
	@Autowired
	private JobRepository jobRepo;
	 

	@Override
	public String addJob(Job job) {
		
		try {
			
			jobRepo.save(job);
			return "Your job offer has been added successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public String updateJob(Job job) {
		
		try {
			
			jobRepo.save(job);
			return "Your job offer has been updated successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public String deleteJob(int jobId) {
		
		try {

			jobRepo.deleteById(jobId);
			return "Your job offer has been deleted successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public List<Job> getCompanyjobOffers(int companyId) {
		
		try {

			Iterable<Job> itr = jobRepo.getCompanyJobOffers(companyId);
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
	return "There is an error while doing this operation.";
}
*/
