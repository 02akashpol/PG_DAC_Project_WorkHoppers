package com.cdac.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.dto.Job;
import com.cdac.dto.User;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
	
	//public Job findByjobId(int jobId);
	//public Job findByjobIdAndjobTitle(int jobId, String jobTitle );
	
	@Query(value = "select * from job where company_id = ?1", nativeQuery = true)
	public List<Job> getCompanyJobOffers(int companyId);

}