package com.example.bibiliotech.service.implement;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibiliotech.model.Catalog;
import com.example.bibiliotech.model.Review;
import com.example.bibiliotech.repository.CatalogRepository;
import com.example.bibiliotech.repository.ReviewRepository;
import com.example.bibiliotech.service.ReviewService;


@Service
public class ReviewServiceImplement implements ReviewService{

	@Autowired
	ReviewRepository reviewRepository;

	@Autowired
	CatalogRepository catalogRepository;

	@Override
	public Review createReview(Review review, Long idCatalog) {
		try {
			Catalog c = catalogRepository.findByidBookCatalog(idCatalog);
			review.setIdBookCatalog(c);
		}
		catch(Exception e) {
			System.out.println("catalog not found");
		}
		return reviewRepository.save(review);
	}
	
	@Override
	public void deleteReview(Long idReview) {
		try {
			reviewRepository.deleteById(idReview);
		}
		catch(Exception e) {
			System.out.println("Review not found");			
		}

	}

	@Override
	public List<Review> findAllReviews() {
		return reviewRepository.findAll();
	}

//	@Override
//	public Review createReview(String review, Integer rating, Long idBookCatalog) {
//		Review r = new Review();
//		r.setReview(review);
//		r.setRating(rating);
//		Catalog b = catalogRepository.findByidBookCatalog(idBookCatalog);
//		r.setIdBookCatalog(b);
//		return reviewRepository.save(r);
//	}
	
	



}
