package com.example.bibiliotech.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bibiliotech.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}
