 CREATE TABLE `answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `answer_text` varchar(200) NOT NULL,
  `point_value` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ForeignKey_Question_idx` (`question_id`),
  CONSTRAINT `ForeignKey_Question` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;