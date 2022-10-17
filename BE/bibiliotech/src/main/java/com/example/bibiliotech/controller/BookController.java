package com.example.bibiliotech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.bibiliotech.model.Book;
import com.example.bibiliotech.model.Catalog;
import com.example.bibiliotech.repository.BookRepository;
import com.example.bibiliotech.service.BookService;
import com.example.bibiliotech.exception.ResourceNotFoundException;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	BookService bookService;

	@Autowired
	BookRepository bookRepository;

	@PostMapping("/create/{idCatalog}")
	public Book createBook(@PathVariable(value="idCatalog") Long idCatalog) {
		return bookService.createBook(idCatalog);
	}
	
	@DeleteMapping("/delete/{idBook}") 
	public void deleteBook(@PathVariable(value="idBook") Long idBook) {
		bookService.deleteBook(idBook);
	}
	
	@GetMapping("/find/{id}") 
	public Book findById(@PathVariable (value = "id") Long idBook) {
		return bookService.findById(idBook);
	}
	
	@GetMapping("/find/all")
	public List<Book> findAllBook(){
		return bookService.findAllBook();
	}

	//    @PutMapping("/borrow") 
	//    public Book borrow(@RequestParam Long idBook,@RequestParam Long idUser) {
	//    	return bookService.borrow(idBook, idUser);
	//    }

	@PostMapping("/borrow/{idCatalog}/{idUser}/{startDate}/{endDate}") 
	public void borrow(@PathVariable(value="idCatalog") Long idCatalog, @PathVariable(value="idUser") Long idUser,
			@PathVariable(value="startDate") String startDate,@PathVariable(value="endDate") String endDate) {
		bookService.borrow(idCatalog, idUser, startDate, endDate);
	}

	@PostMapping("/return/{idBook}/{idUser}")
	public Book returnBook(@PathVariable(value="idBook") Long idBook,@PathVariable(value="idUser") Long idUser) {
		return bookService.returnBook(idBook, idUser);
	}
	
	@PostMapping("renew/{idBook}/{endDate}")
	public Book newBorrow(@PathVariable(value="idBook")Long idBook,@PathVariable(value="endDate") String endDate) {
	return bookService.renew(idBook, endDate);
	}
	
	//    @GetMapping("/find/catalog")
	//    public Book findByIdCatalog(@RequestParam Long idCatalog) {
	//		return bookService.findByIdCatalog(idCatalog);
	//	}


}