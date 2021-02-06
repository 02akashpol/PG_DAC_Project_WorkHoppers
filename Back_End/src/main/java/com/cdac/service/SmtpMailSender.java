package com.cdac.service;

import javax.mail.MessagingException;

public interface SmtpMailSender {

	public void send(String to, String subject, String body) throws MessagingException;
}
