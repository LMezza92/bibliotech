package com.example.bibiliotech.service;

import java.util.List;

import com.example.bibiliotech.model.Catalog;

public interface CatalogService {

	public Catalog createBookCatalog(Catalog catalog);
	
	public void deleteById(Long idBookCatalog);
	
	public Catalog updateBook(Catalog catalog);
	
	public List<Catalog> findAllBooks();

	public Catalog findByIdBookCatalog(Long idBookCatalog);

	public List<Catalog> findByTitle(String title);

	public List<Catalog> findByAuthor(String author);

	public List<Catalog> findByEditor(String editor);

	public List<Catalog> findByCategory(String category);

	//	public Catalog createBookCatalog(String title, String author, String editor, String category,
	//			int numPages, int numCopies, String bookImagePath);

}
