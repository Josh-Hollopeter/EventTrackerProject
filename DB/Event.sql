-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Event
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Event` ;

-- -----------------------------------------------------
-- Schema Event
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Event` DEFAULT CHARACTER SET utf8 ;
USE `Event` ;

-- -----------------------------------------------------
-- Table `Event`.`playground`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Event`.`playground` ;

CREATE TABLE IF NOT EXISTS `Event`.`playground` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `visited` TINYINT NULL,
  `location` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `description` VARCHAR(600) NULL,
  `condition` VARCHAR(45) NULL,
  `image` VARCHAR(4500) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Event`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Event`.`user` ;

CREATE TABLE IF NOT EXISTS `Event`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

SET SQL_MODE = '';
DROP USER IF EXISTS user1;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user1' IDENTIFIED BY 'user1';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `Event`.* TO 'user1';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Event`.`playground`
-- -----------------------------------------------------
START TRANSACTION;
USE `Event`;
INSERT INTO `Event`.`playground` (`id`, `name`, `visited`, `location`, `rating`, `description`, `condition`, `image`) VALUES (1, 'playground', 1, 'here', '5', 'greater', 'great', 'none');

COMMIT;

