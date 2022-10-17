package com.example.bibiliotech.service.implement;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibiliotech.exception.ResourceNotFoundException;
import com.example.bibiliotech.model.Book;
import com.example.bibiliotech.model.Catalog;
import com.example.bibiliotech.model.User;
import com.example.bibiliotech.repository.BookRepository;
import com.example.bibiliotech.repository.CatalogRepository;
import com.example.bibiliotech.repository.UserRepository;
import com.example.bibiliotech.service.BookService;

@Service
public class BookServiceImplement implements BookService {

	@Autowired
	BookRepository bookRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	CatalogRepository catalogRepository;

	//	@Override
	//	public Book borrow(Long idBook, Long idUser) {
	//		Book book = new Book();
	//		Catalog catalog = new Catalog();
	//		book =bookRepository.getById(idBook);
	//		catalog = catalogRepository.findByidBookCatalog(book.getIdCatalog().getIdBookCatalog());
	//
	//		if(catalog.getNumCopies()>0 && !book.getIsOut()) {
	//			User f= userRepository.findByIdUser(idUser);
	//			if(f != null) {
	//				book.setUser(f);
	//				book.setIsOut(true);
	//				catalog.setNumCopies(catalog.getNumCopies()-1);
	//					return bookRepository.save(book);
	//			}
	//			else {
	//				System.out.println("user not found");
	//				return null;
	//			}
	//			
	//		}
	//		else {
	//			System.out.println("Book copies are 0");
	//			return null;
	//		}
	//	}

	@Override
	public Book createBook(Long idCatalog) {
		Book book= new Book();
		try {
			Catalog catalog = catalogRepository.findByidBookCatalog(idCatalog);
			book.setIdCatalog(catalog);
			catalog.setNumCopies(catalog.getNumCopies()+1);
		}
		catch(Exception e) {
			System.out.println("catalog not found");
		}
		return bookRepository.save(book);
	}
	
	@Override
	public void deleteBook(Long idBook) {

		Book book = bookRepository.findById(idBook)
				.orElseThrow(() -> new ResourceNotFoundException("book", "id", idBook));
		Catalog idCatalog = book.getIdCatalog();
		idCatalog.getIdBookCatalog();
		idCatalog.setNumCopies(idCatalog.getNumCopies()-1);
		bookRepository.deleteById(idBook);
		catalogRepository.save(idCatalog);
	}
	
	@Override
	public Book findById(Long idBook) {
		Book c= bookRepository.findById(idBook)
				.orElseThrow(() -> new ResourceNotFoundException("book", "id", idBook));
		return c;
	}
	
	@Override
	public List<Book> findAllBook() {
		return bookRepository.findAll();
	}
	
	@Override
	public Set<Book> findByIdCatalog(Long idCatalog) {
		Catalog catalog = catalogRepository.findById(idCatalog)
				.orElseThrow(() -> new ResourceNotFoundException("book", "id", idCatalog));
		return bookRepository.findByIdCatalog(catalog);
	}
	
	@Override
	public void borrow(Long idCatalog, Long idUser, String startDate, String endDate) {
		Set<Book> books = findByIdCatalog(idCatalog);
		User user = userRepository.findById(idUser)
				.orElseThrow(() -> new ResourceNotFoundException("user", "id", idUser));       
		for(Book book : books) {
			if(!book.getIsOut() && user != null) {
				book.setUser(user);
				book.setIsOut(true);
				book.setStartDate(startDate);
			    book.setEndDate(endDate);
				Catalog catalog = catalogRepository.findByidBookCatalog(book.getIdCatalog().getIdBookCatalog());
				if(catalog.getNumCopies()>0) {
					catalog.setNumCopies(catalog.getNumCopies()-1);
				}
				else {
					System.out.println("Book's copies are 0");
				}
				bookRepository.save(book);
				break;
			}
		}
	}

	@Override
	public Book returnBook(Long idBook, Long idUser) {
		Book book = bookRepository.getById(idBook);
		User user = userRepository.findById(idUser)
				.orElseThrow(() -> new ResourceNotFoundException("user", "id", idUser));;
		Catalog catalog = catalogRepository.findByidBookCatalog(book.getIdCatalog().getIdBookCatalog());
		if(book.getIsOut() == true) {
			book.setUser(user = null);
			book.setIsOut(false);
			catalog.setNumCopies(catalog.getNumCopies()+1);
			book.setEndDate(null);
			book.setStartDate(null);
			catalogRepository.save(catalog);
		}
		return bookRepository.save(book);
	}

	@Override
	public Book renew(Long idBook, String endDate) {
		Book book = bookRepository.findById(idBook)
				.orElseThrow(() -> new ResourceNotFoundException("book", "id", idBook));
		book.setStartDate(book.getEndDate());
		book.setEndDate(endDate);
		return bookRepository.save(book);
	}
	

}