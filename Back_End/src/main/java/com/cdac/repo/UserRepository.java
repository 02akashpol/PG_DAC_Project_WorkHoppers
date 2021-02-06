package com.cdac.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.dto.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByUserEmailId(String userEmailId);
	public User findByUserEmailIdAndUserPassword(String userEmailId, String userPassword);
	
	@Query(value = "select * from user where user_id = ?1", nativeQuery = true)
	public User getProfile(long userId);
	
	@Transactional
	@Modifying
	@Query(value = "update user set user_name = ?2, user_address = ?3,"
					+ "user_password = ?5, user_contact_no = ?6 where user_id = ?1 and user_email_id = ?4", nativeQuery = true)
	public int updateProfile(long userId, String userName, String userAddress, String userEmailId,
			String userPassword, String userContactNo);
	
	@Query(value = "delete from user where user_id = ?", nativeQuery = true)
	public User deleteProfile(Long userId);
	
	@Query(value = "select * from user where user_email_id = ?1", nativeQuery = true)
	public User getUserData(String userEmailId);
	
}
