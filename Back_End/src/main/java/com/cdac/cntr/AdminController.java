package com.cdac.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Job;
import com.cdac.dto.User;
import com.cdac.service.AdminService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@DeleteMapping("/AdminJobDelete/{jobId}")
	public String jobDelete(@PathVariable int jobId) {
		
		return adminService.deleteJob(jobId);
	}
	
	@GetMapping("/UserRecords")
	public List<User> userList() {
		return adminService.getUserRecords();
	}
	

	@GetMapping("/JobRecords")
	public List<Job> jobList() {
		return adminService.getJobRecords();
	}

}

