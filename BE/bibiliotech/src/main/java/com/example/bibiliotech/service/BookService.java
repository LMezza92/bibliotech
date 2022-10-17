package com.example.bibiliotech.service;

import java.util.List;
import java.util.Set;

import com.example.bibiliotech.model.Book;

public interface BookService {

	public Book createBook(Long idCatalog);
	
	public void deleteBook(Long idBook);
	
	public Book findById(Long idBook);

	//    public Book borrow(Long idBook, Long idUser);
	
	public List<Book> findAllBook();
	
	public Set<Book> findByIdCatalog(Long idCatalog);

	public void borrow(Long idCatalog, Long idUser, String startDate, String endDate);

	public Book returnBook(Long idBook, Long idUser);
	
	public Book renew(Long idBook, String endDate);

}
