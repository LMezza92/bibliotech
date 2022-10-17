package com.example.bibiliotech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bibiliotech.model.Catalog;
import com.example.bibiliotech.service.CatalogService;

@CrossOrigin
@RestController
@RequestMapping("/catalog")

public class CatalogController {

	@Autowired
	CatalogService catalogService;

	@PostMapping("/create")
	public Catalog createBookCatalog(@RequestBody Catalog catalog){
		return catalogService.createBookCatalog(catalog);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable(value="id") Long idBookCatalog) {
		catalogService.deleteById(idBookCatalog);
	}
	
	@PostMapping("/update")
	public Catalog update(@RequestBody Catalog catalog) {
		return catalogService.updateBook(catalog);
	}

	
	@GetMapping("/find/all") 
	public List<Catalog> findAllBooks() {
		return catalogService.findAllBooks();
	}

	@GetMapping("/find/{id}")
	public Catalog findByIdBookCatalog(@PathVariable(value="id") Long idBookCatalog) {
		return catalogService.findByIdBookCatalog(idBookCatalog);
	}

	@GetMapping("/find/title/{title}")
	public List<Catalog> findByTitle(@PathVariable(value="title") String title) {
		return catalogService.findByTitle(title);
	}

	@GetMapping("/find/author/{author}")
	public List<Catalog> findByAuthor(@PathVariable(value="author") String author) {
		return catalogService.findByAuthor(author);
	}

	@GetMapping("/find/category/{category}")
	public List<Catalog> findByCategory(@PathVariable(value="category") String category) {
		return catalogService.findByCategory(category);
	}

	@GetMapping("/find/editor/{editor}")
	public List<Catalog> findByEditor(@PathVariable(value="editor") String editor) {
		return catalogService.findByEditor(editor);
	}

	//	@PostMapping("/create") 
	//	public Catalog createBookCatalog(@RequestParam String title, String author, String editor, String category, int numPages,
	//			int numCopies, String bookImagePath) {
	//		return catalogService.createBookCatalog(title, author, editor, category, numPages, numCopies, bookImagePath);
	//	}

}
