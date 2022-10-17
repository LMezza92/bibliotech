package com.example.bibiliotech.model;

import java.io.Serializable;
import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table (name="book")
public class Book implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8767578147685217645L;

	@Id
	@Column(name="Id_book")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idBook;

	@ManyToOne
	@JoinColumn(name="Id_catalog")
	private Catalog idCatalog;

	@Column(name="is_out")
	private Boolean isOut = false;

	@Column(name="start_date")
	private String startDate;

	@Column(name="end_date")
	private String endDate;

	public Long getIdBook() {
		return idBook;
	}

	public void setIdBook(Long idBook) {
		this.idBook = idBook;
	}

	public Boolean getIsOut() {
		return isOut;
	}

	public void setIsOut(Boolean isOut) {
		this.isOut = isOut;
	}

	@ManyToOne
	@JoinColumn(name="id_user")
	@JsonIgnore
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Catalog getIdCatalog() {
		return idCatalog;
	}

	public void setIdCatalog(Catalog idCatalog) {
		this.idCatalog = idCatalog;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}



}

