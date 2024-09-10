USE metro_cdmx;

DELIMITER //
CREATE PROCEDURE calculate_distance_between_lines(
    IN station_one POINT,
    IN station_two POINT,
    IN meters BOOLEAN
)
BEGIN

    IF meters THEN

        SELECT
        ST_Distance_Sphere(station_one, station_two) AS distances;

    ELSE

        SELECT
        ST_Distance_Sphere(station_one, station_two) / 1000 AS distances;

    END IF;

END //

DELIMITER ;

-- Como llamar a el procedur:
-- CALL calculate_distance_between_lines(POINT(-99.173702, 19.49039233), POINT(-99.07262564, 19.4146103),true);

-- PARA BORRAR EL PROCEDURE SE USA DROP PROCEDURE `PROCEDURE_NAME`;

-- Para ver que procedures hay en la base de datos se ejecuta SHOW PROCEDURE STATUS WHERE db = 'DB_NAME';