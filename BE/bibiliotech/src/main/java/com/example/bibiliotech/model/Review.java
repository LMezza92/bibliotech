package com.example.bibiliotech.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="review")

public class Review implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7529292603569993611L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idReview;

	@Column(name="review")
	private String review;

	@Column(name="rating")
	private Integer rating;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="id_catalog")
	private Catalog idBookCatalog;

	public Long getIdReview() {
		return idReview;
	}

	public void setIdReview(Long idReview) {
		this.idReview = idReview;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Catalog getIdBookCatalog() {
		return idBookCatalog;
	}

	public void setIdBookCatalog(Catalog idBookCatalog) {
		this.idBookCatalog = idBookCatalog;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}




}
