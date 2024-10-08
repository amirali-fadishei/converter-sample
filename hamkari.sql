
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `user_info` (
  `firstname` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `gender` text COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;