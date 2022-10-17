package com.example.bibiliotech.service.implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bibiliotech.model.Catalog;
import com.example.bibiliotech.repository.CatalogRepository;
import com.example.bibiliotech.service.CatalogService;

@Service

public class CatalogServiceImplement implements CatalogService {

	@Autowired
	CatalogRepository catalogRepository;

	@Override
	public Catalog createBookCatalog(Catalog catalog){
		return catalogRepository.save(catalog);
	}
	
	@Override
	public void deleteById(Long idBookCatalog) {		
		try {
			catalogRepository.deleteById(idBookCatalog);
		}
		catch(Exception e) {
			System.out.println("Book not found");			
		}
	}
	
	@Override
	public Catalog updateBook(Catalog catalog) {
		Catalog updateCatalog = catalogRepository.findByidBookCatalog(catalog.getIdBookCatalog());
		if(updateCatalog.getTitle() != catalog.getTitle()) {
			updateCatalog.setTitle(catalog.getTitle());
		}
		if(updateCatalog.getAuthor() != catalog.getAuthor()) {
			updateCatalog.setAuthor(catalog.getAuthor());
		}
		if(updateCatalog.getCategory() != catalog.getCategory()) {
			updateCatalog.setCategory(catalog.getCategory());
		}
		if(updateCatalog.getEditor() != catalog.getEditor());{
			updateCatalog.setEditor(catalog.getEditor());
		}
		if(updateCatalog.getNumPages() != catalog.getNumPages());{
			updateCatalog.setNumPages(catalog.getNumPages());
		}

		return catalogRepository.save(updateCatalog);
	}
	
	@Override
	public List<Catalog> findAllBooks() {
		return catalogRepository.findAll();
	}

	@Override
	public Catalog findByIdBookCatalog(Long idBookCatalog) {
		return catalogRepository.findByidBookCatalog(idBookCatalog);
	}

	@Override
	public List<Catalog> findByTitle(String title) {
		return catalogRepository.findByTitleContainingIgnoreCase(title);
	}

	@Override
	public List<Catalog> findByAuthor(String author) {
		return catalogRepository.findByAuthorContainingIgnoreCase(author);
	}

	@Override
	public List<Catalog> findByEditor(String editor) {
		return catalogRepository.findByEditorContainingIgnoreCase(editor);
	}

	@Override
	public List<Catalog> findByCategory(String category) {
		return catalogRepository.findByCategoryContainingIgnoreCase(category);
	}

	//	@Override
	//	public Catalog createBookCatalog(String title, String author, String editor, String category, int numPages,
	//			int numCopies, String bookImagePath) {
	//		Catalog b = new Catalog();
	//		b.setTitle(title);
	//		b.setAuthor(author);
	//		b.setEditor(editor);
	//		b.setCategory(category);
	//		b.setNumPages(numPages);
	//		b.setNumCopies(numCopies);
	//		b.setBookImagePath(bookImagePath);
	//		return catalogRepository.save(b);
	//	}

}
