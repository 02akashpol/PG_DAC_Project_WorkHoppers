package com.cdac.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.dto.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}
