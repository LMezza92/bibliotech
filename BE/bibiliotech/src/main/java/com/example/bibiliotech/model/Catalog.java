package com.example.bibiliotech.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="catalog")
public class Catalog implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5598666005029730031L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idBookCatalog;

	@Column(name="title")
	private String title;

	@Column(name="author")
	private String author;

	@Column(name="editor")
	private String editor;

	@Column(name="category")
	private String category;

	@Column(name="num_pages")
	private Integer numPages;

	@Column(name="num_copies")
	private int numCopies;

	@Column(name="book_image_path")
	private String bookImagePath;

	@OneToMany(mappedBy="idBookCatalog", orphanRemoval=true)
	private Set<Review> review;

	@JsonIgnore
	@OneToMany(mappedBy="idCatalog", orphanRemoval=true)
	private Set<Book> books;

	public Long getIdBookCatalog() {
		return idBookCatalog;
	}

	public void setIdBookCatalog(Long idBookCatalog) {
		this.idBookCatalog = idBookCatalog;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getEditor() {
		return editor;
	}

	public void setEditor(String editor) {
		this.editor = editor;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getNumPages() {
		return numPages;
	}

	public void setNumPages(Integer numPages) {
		this.numPages = numPages;
	}

	public int getNumCopies() {
		return numCopies;
	}

	public void setNumCopies(int numCopies) {
		this.numCopies = numCopies;
	}

	public String getBookImagePath() {
		return bookImagePath;
	}

	public void setBookImagePath(String bookImagePath) {
		this.bookImagePath = bookImagePath;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Set<Review> getReview() {
		return review;
	}

	public void setReview(Set<Review> review) {
		this.review = review;
	}

	public Set<Book> getBooks() {
		return books;
	}

	public void setBooks(Set<Book> books) {
		this.books = books;
	}	




}
