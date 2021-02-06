package com.cdac.cntr;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.ContactUs;
import com.cdac.dto.Job;
import com.cdac.dto.User;
import com.cdac.service.SmtpMailSender;
import com.cdac.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private SmtpMailSender smtpMailSender;
	
	@PostMapping("/UserAdd")
	public String userAdd(@RequestBody User user) {
		
		String regMsg = userService.registration(user);
		
		if(regMsg == "You have done your registration successfully.") {
			
			User userObj = null;
			
			userObj = userService.fetchUserData(user.getUserEmailId());
			System.out.println(userObj);
			
			if(userObj != null) {

				try {
					//are this email address and below is the password..
					smtpMailSender.send(userObj.getUserEmailId(), "Welcome to the WorkHoppers application.", "Hi, "+userObj.getUserName()+". Thanks for signing up with WorkHoppers. Your login credentials are 1) Your email address is : "+userObj.getUserEmailId()+", 2) Your password is : "+userObj.getUserPassword());
					return "You have done your registration successfully, An email has been sent successfully on your registered email address.";
					
				} catch (MessagingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return "There is an error while doing this operation.";
				}
				
			} 
		}
		
		return regMsg;
	}
	
	@PostMapping("/UserValidate")
	public User userValidate(@RequestBody User user) {
		
		User userObj = null;
		
		if(user != null)
			userObj = userService.logIn(user);
		
		return userObj;
	}
	
	@PostMapping("/ContactUs")
	public String contactUs(@RequestBody ContactUs contactUs) {
		
		return userService.submit(contactUs);
	}
	
	@DeleteMapping("/UserDelete/{userId}")
	public String userDelete(@PathVariable long userId) {
		
		return userService.deleteUser(userId);
	}
	
	@DeleteMapping("/JobDelete/{jobId}")
	public String jobDelete(@PathVariable int jobId) {
		
		return userService.deleteJob(jobId);
	}
	
	@GetMapping("/ProfileGet/{userId}")
	public User profileGet(@PathVariable Long userId) {
		
		return userService.getProfile(userId);
	}

	
	@PutMapping("/ProfileUpdate")
	public int profileUpdate(@RequestBody User user) {
		
		return userService.updateProfile(user);
	}
	
	@DeleteMapping("/ProfileDelete/{userId}")
	public String profileDelete(@PathVariable Long userId) {
		
		return userService.deleteProfile(userId);
	}
	
	@GetMapping("/ForgotPassword/{userEmailId}")
	public String forgotPassword(@PathVariable String userEmailId) {
		
		System.out.println(userEmailId);
		User userObj = null;
		
		userObj = userService.fetchUserData(userEmailId);
		System.out.println(userObj);
		
		if(userObj != null) {

			try {
				 //are this email address and below is the password..
				smtpMailSender.send(userObj.getUserEmailId(), "Your login credentials for the WorkHoppers application.", "Your email address is : "+userObj.getUserEmailId()+", Your password is : "+userObj.getUserPassword());
				return "An email has been sent successfully on your registered email address with your login credentials.";
				
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return "There is an error while doing this operation.";
			}
			
		} 
	
		return "A user of the given credentials is not present in our data.";
		
		//return null;	
		
	}
	
	/*
	@RequestMapping("/send-mail")
	public void sendMail() throws MessagingException {
		
		smtpMailSender.send("akashpolcdac@gmail.com", "testing...!!", "Hello");
	}
	*/

}
