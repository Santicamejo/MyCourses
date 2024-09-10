-- creamos tablas

USE metro_cdmx;

CREATE TABLE `lines` (

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,

    `name` VARCHAR(10) NOT NULL,
    `color` VARCHAR(10) NOT NULL,

    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`)

) -- MODIFICAR length de color a 255)
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `stations` (

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL, 

    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`)

)-- MODIFICAR length de name a 255)
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `trains` (
  `serial_number` VARCHAR(10) NOT NULL, 
  `lines_id` BIGINT(20) UNSIGNED NOT NULL, 

  `type` TINYINT(4) NOT NULL,
  `year` INT(4) NOT NULL,

  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY(serial_number),
  CONSTRAINT `fk_lines`
  FOREIGN KEY(`lines_id`) REFERENCES `lines`(`id`)
) -- MODIFICAR nombre LINES_ID a LINE_id)
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;