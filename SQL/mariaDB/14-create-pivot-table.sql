USE metro_cdmx

--creación de la tabla lines_stations

CREATE TABLE `lines_stations` (

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,

    `stations_id` BIGINT(20) UNSIGNED NOT NULL,
    `lines_id` BIGINT(20) UNSIGNED NOT NULL, 


    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(id),

    CONSTRAINT `lines_stations_stations_id_foregin`
    FOREIGN KEY(`stations_id`) REFERENCES `stations` (`id`),

    CONSTRAINT `lines_stations_lines_id_foregin`
    FOREIGN KEY(`lines_id`) REFERENCES `lines` (`id`)

)
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;






