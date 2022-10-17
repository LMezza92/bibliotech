package com.example.bibiliotech.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="user")
public class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8087125190840955672L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUser;

	@Column(name="email")
	private String email;

	@Column(name="username")
	private String username;

	@Column(name="password")
	private String password;

	@Column(name="is_premium")
	private Boolean isPremium;

	@Column(name="is_admin")
	private Boolean isAdmin;

	@OneToMany(mappedBy="user")
	private Set<Book> books;

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIsPremium() {
		return isPremium;
	}

	public void setIsPremium(Boolean isPremium) {
		this.isPremium = isPremium;
	}

	public Boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public Set<Book> getBooks() {
		return books;
	}

	public void setBooks(Set<Book> books) {
		this.books = books;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
