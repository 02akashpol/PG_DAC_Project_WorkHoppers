package com.cdac.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


@Component
public class SmtpMailSenderImple implements SmtpMailSender {

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void send(String to, String subject, String body) throws MessagingException {
		
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper;
		
		helper = new MimeMessageHelper(message, true);
		
		helper.setSubject(subject);
		helper.setTo(to);
		helper.setText(body,true);
		
		javaMailSender.send(message);
		
	}

	/*mail.smtp.auth=true
	spring.mail.properties.mail.smtp.socketFactory.port = 465
	spring.mail.host = smtp.gmail.com

	spring.mail.properties.mail.smtp.auth = true

	spring.mail.properties.mail.smtp.socketFactory.class = javax.net.ssl.SSLSocketFactory
	spring.mail.properties.mail.smtp.socketFactory.fallback = false
	spring.mail.properties.mail.smtp.ssl.enable = true

	spring.mail.properties.mail.smtp.port= 465

	spring.mail.properties.mail.smtp.starttls.enable=true
	*/	
}
