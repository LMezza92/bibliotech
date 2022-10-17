create database bibliotech;
use bibliotech;

create table book(
id_book int primary key auto_increment,
id_catalog int,
is_out boolean,
id_user int,
start_date VARCHAR(20),
end_date   VARCHAR(20),
FOREIGN KEY (id_user)REFERENCES user(id),
FOREIGN KEY (id_catalog)REFERENCES catalog(id)
);




create table user(
id int primary key auto_increment,
email varchar(30),
username varchar(30),
password varchar(15),
is_premium boolean,
is_admin boolean
);



create table catalog(
id int primary key auto_increment,
title varchar(50),
author varchar(50),
editor varchar(50),
category varchar(50),
num_pages int,
book_image_path varchar(300),
num_copies int
);





create table review(
id int primary key auto_increment,
id_catalog int,
id_user int,

rating int,
review varchar(2000),
FOREIGN KEY (id_catalog)REFERENCES catalog(id),
FOREIGN KEY (id_user) REFERENCES user(id)
);


select * from catalog;
select * from book;
select * from user;
select * from review;

insert into user (is_premium, is_admin) VALUES (TRUE,FALSE);
insert into book (is_out, id_user) VALUES (TRUE,1);
insert into book (id_book,id_catalog,is_out,start_date) values (3,1,TRUE,NOW());

select title,author,catalog.id,book.id_user,book.id_book from catalog
inner join book
on book.id_catalog = catalog.id; 

select title, author,review.review,review.id_user,user.username
from catalog
inner join review
on review.id_catalog = catalog.id
join user;


/*
select book.is_out,catalog.num_copies,catalog.id, catalog.title,book.id_book, user.username,
IF(book.is_out = 1 & id_user !=0 ,catalog.num_copies-1,catalog.num_copies) as borrow
from book
inner join user
on user.id = book.id_user
inner join catalog
on book.id_catalog = catalog.id;

UPDATE catalog set catalog.num_copies =(select 
IF(book.is_out = 1 & id_user !=0 ,catalog.num_copies-1,catalog.num_copies) as borrow
from book
inner join user
on user.id = book.id_user
inner join catalog c
on book.id_catalog = c.id) where c.title = "Fiesta";
*/
 











