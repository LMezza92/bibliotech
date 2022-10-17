package com.example.bibiliotech.service;

import java.util.List;
import java.util.Set;

import com.example.bibiliotech.model.Review;

public interface ReviewService {

	public Review createReview(Review review, Long idCatalog);
	
	public void deleteReview(Long idReview);

//	public Review createReview(String review, Integer rating, Long idBookCatalog);
	
	public List<Review> findAllReviews(); //per i test

}
