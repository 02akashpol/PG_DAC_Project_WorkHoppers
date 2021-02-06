package com.cdac.cntr;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Job;
import com.cdac.service.CompanyService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@PostMapping("/CompanyJobAdd")
	public String jobAdd(@RequestBody Job job) {
		
		return companyService.addJob(job);
		//return "Jobs Added Successfully.";
	}
	
	@PutMapping("/CompanyJobUpdate")
	public String jobUpdate(@RequestBody Job job) {
		
		return companyService.updateJob(job);
	}

	@DeleteMapping("/CompanyJobDelete/{jobId}")
	public String jobDelete(@PathVariable int jobId) {
		
		return companyService.deleteJob(jobId);
	}
	
	@GetMapping("/CompanyJobOffers/{companyId}")
	public List<Job> jobList(@PathVariable int companyId) {
		
		return companyService.getCompanyjobOffers(companyId);
	}

}
