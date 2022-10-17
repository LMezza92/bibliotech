package com.example.bibiliotech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.bibiliotech.model.Catalog;

public interface CatalogRepository extends JpaRepository<Catalog, Long>{

	public Catalog findByidBookCatalog(Long idBookCatalog);

	public List<Catalog> findByTitleContainingIgnoreCase(String title);

	public List<Catalog> findByAuthorContainingIgnoreCase(String author);

	public List<Catalog> findByEditorContainingIgnoreCase(String editor);

	public List<Catalog> findByCategoryContainingIgnoreCase(String category);

}
