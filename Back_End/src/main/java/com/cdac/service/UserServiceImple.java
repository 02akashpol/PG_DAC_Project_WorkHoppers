package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dto.ContactUs;
import com.cdac.dto.Job;
import com.cdac.dto.User;
import com.cdac.repo.ContactUsRepository;
import com.cdac.repo.JobRepository;
import com.cdac.repo.UserRepository;

@Service
public class UserServiceImple implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ContactUsRepository contactUsRepository;
	
	@Autowired
	JobRepository jobRepository;
	
	
	@Override
	public String registration(User user) {

		try {
			
			User userObj = null;
			userObj = userRepository.findByUserEmailId(user.getUserEmailId());
			
			if(userObj != null) {
				
				return "The provided email address already exists in our data.";
				
			} else {

				userRepository.save(user);
				return "You have done your registration successfully.";
			}
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public User logIn(User user) {
		
		try {

			return userRepository.findByUserEmailIdAndUserPassword(user.getUserEmailId(), user.getUserPassword());	
			
		} catch(Exception exp) {
			
			return null;
		}
	}
	
	@Override
	public String submit(ContactUs contactUs) {
		
		try {

			contactUsRepository.save(contactUs);
			return "Your Response has been submitted successfully.";	
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public String deleteUser(long userId) {
		
		try {

			userRepository.deleteById(userId);
			return "JobSeeker profile has been deleted successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}

	@Override
	public List<User> getAll() {
		
		try {
			
			return null;
			
		} catch(Exception exp) {
			
			return null;
		}
	}

	@Override
	public List<Job> getAllJobs() {

		try {
			
			return null;
			
		} catch(Exception exp) {
			
			return null;
		}
	}

	@Override
	public String deleteJob(int jobId) {
		
		try {

			jobRepository.deleteById(jobId);
			return "Job offer has been deleted successfully.";
			
		} catch(Exception exp) {
			
			return "There is an error while doing this operation.";
		}
	}
	
	@Override
	public int updateProfile(User user) {

		try {
			
			return userRepository.updateProfile(user.getUserId(), user.getUserName(), 
												user.getUserAddress(), user.getUserEmailId(),
												user.getUserPassword(), user.getUserContactNo()
												);			
			
		} catch(Exception exp) {
			
			return 0;
		}
	}


	@Override
	public User getProfile(Long userId) {
		
		try {

			return userRepository.getProfile(userId);	
			
		} catch(Exception exp) {
			
			return null;
		}
	}

	@Override
	public String deleteProfile(Long userId) {
		
		 try {

			 userRepository.deleteById(userId);
			 return "User profile has been deleted successfully.";	
			 
		 } catch(Exception exp) {
		 	
		 	return "There is an error while doing this operation.";
		 }
	}

	@Override
	public User fetchUserData(String userEmailId) {
		
		try {
		
			return userRepository.getUserData(userEmailId);
			
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