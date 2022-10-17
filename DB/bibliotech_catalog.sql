-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: localhost    Database: bibliotech
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL,
  `editor` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `num_pages` int DEFAULT NULL,
  `book_image_path` varchar(100) DEFAULT NULL,
  `num_copies` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES (1,'Il Silmarillion','J.R.R. Tolkien','Bompiani','Romanzo',450,'1.jpg',0),(2,'Le intermittenze della morte','José Saramago','Feltrinelli','Narrativa moderna e contemporanea',224,'2.jpg',0),(3,'La ragazza dello Sputnik','Murakami Haruki','Einaudi','Narrativa moderna e contemporanea',216,'3.jpg',0),(4,'Cime tempestose','Emily Brontë','Feltrinelli','Narrativa classica',432,'4.jpg',0),(5,'1Q84','Murakami Haruki','Einaudi','Narrativa moderna e contemporanea',728,'5.jpg',0),(6,'Espiazione','McEwan','Einaudi','Narrativa moderna e contemporanea',400,'6.jpg',0),(7,'Il deserto dei tartari','Dino Buzzati','Mondadori','Narrativa moderna e contemporanea',238,'7.jpg',0),(8,'Il suggeritore','Donato Carrisi','TEA','Thriller e gialli',464,'8.jpg',0),(9,'Il tribunale delle anime','Donato Carrisi','TEA','Thriller e gialli',464,'9.jpg',0),(10,'4 3 2 1','Paul Auster','Einaudi','Narrativa moderna e contemporanea',960,'10.jpg',0),(11,'Parlare tra amici','Sally Rooney','Einaudi','Narrativa moderna e contemporanea',304,'11.jpg',0),(12,'Il buio oltre la siepe','Harper Lee','Feltrinelli','Narrativa moderna e contemporanea',352,'12.jpg',0),(13,'La memoria di Babel. L\'attraversa specchi. Vol.3','Christelle Dabos','Europa Editions','Fantasy',456,'13.jpg',0),(14,'La favola di Amore e Psiche','Apuleio Lucio','Feltrinelli','Classici greci e latini',192,'14.jpg',0),(15,'La luna e i falò','Cesare Pavese','Einaudi','Narrativa moderna e contemporanea',192,'15.jpg',0),(16,'Abbandonare un gatto','Murakami Haruki','Einaudi','Narrativa moderna e contemporanea',88,'16.jpg',0),(17,'Ubik','Philip K. Dick','Mondadori','Fantascienza',252,'17.jpg',0),(18,'Yoga','Emmanuel Carrère','Adelphi','Narrativa moderna e contemporanea',312,'18.jpg',0),(19,'La Ragazza A','Abigail Dean','Einaudi','Narrativa moderna e contemporanea',376,'19.jpg',0),(20,'Il tempo di un lento','Giuliano Sangiorgi','Einaudi','Narrativa moderna e contemporanea',256,'20.jpg',0),(21,'Klara e il sole','Kazuo Ishiguro','Einaudi','Narrativa moderna e contemporanea',280,'21.jpg',0),(22,'Una sirena a settembre','Maurizio De Giovanni','Einaudi','Thriller e gialli',272,'22.jpg',0),(23,'Ragazze Smarrite','Marco Vichi','Guanda','Thriller e gialli',368,'23.jpg',0),(24,'Le piccole libertà','Lorenza Gentile','Feltrinelli','Narrativa moderna e contemporanea',320,'24.jpg',0),(25,'Sogni di mostri e divinità','Laini Taylor','Fazi','Fantasy',576,'25.jpg',0),(26,'Ballata malinconica di una vita perfetta','Emily Itami','Editori','Narrativa moderna e contemporanea',204,'26.jpg',0),(27,'La memoria del lago','Rosa Teruzzi','Marsilio','Thriller e gialli',144,'27.jpg',0),(28,'Il suo freddo pianto. Un caso per Manrico Spinori','Giancarlo De Cataldo','Einaudi','Thriller e gialli',232,'28.jpg',0),(29,'i cani del nulla','Emanuele Trevi','Einaudi','Narrativa moderna e contemporanea',160,'29.jpg',0),(30,'Se due che come noi','Micaela Miljian Savoldelli','Vallardi','Narrativa moderna e contemporanea',304,'30.jpg',0),(31,'Quando si avvera un desiderio','Nicholas Sparks','Sperling & Kupfer','Narrativa rosa',416,'31.jpg',0),(32,'Un bello scherzo','Andrea Vitali','Garzanti','Narrativa moderna e contemporanea',320,'32.jpg',0),(33,'Piccola libreria con delitto','Elena Molini','Mondadori','Narrativa moderna e contemporanea',324,'33.jpg',0),(34,'Tre','Valérie Perrin','E/O','Narrativa moderna e contemporanea',624,'34.jpg',0);
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-23 16:35:22
