package com.example.bibiliotech.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bibiliotech.model.Book;
import com.example.bibiliotech.model.Catalog;

@Repository
public interface BookRepository extends JpaRepository <Book, Long>{

	public Set<Book> findByIdCatalog(Catalog catalog);
	
	public Book findByIdBook(Long idBook);

}