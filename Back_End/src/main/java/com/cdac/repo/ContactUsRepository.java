package com.cdac.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.dto.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {

	
}