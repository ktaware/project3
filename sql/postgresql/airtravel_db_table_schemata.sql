<<<<<<< HEAD
DROP TABLE IF EXISTS airlines CASCADE;
DROP TABLE IF EXISTS routes CASCADE;
DROP TABLE IF EXISTS airports CASCADE;
DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS all_flights CASCADE;

-- Create new tables to import data
CREATE TABLE airports (
	airport_name VARCHAR(70),
	city VARCHAR(70),
	country VARCHAR(70),
	airport_id VARCHAR(10),
	latitude VARCHAR(20),
	longitude VARCHAR(20),
	altitude INTEGER,			
	PRIMARY KEY (airport_id)	
	);

-- SELECT * FROM airports

CREATE TABLE airlines (
	airline_name VARCHAR(70),
	airline_id VARCHAR(10),
	origin_country VARCHAR(70),
	active VARCHAR(5),
	PRIMARY KEY (airline_id)	
	);
	
-- SELECT * FROM airlines
	
CREATE TABLE flights (
	index INTEGER,
	year INTEGER,
	month INTEGER,
	day INTEGER,	
	sched_dep_time INTEGER,	
	sched_arr_time INTEGER,
	airline_id VARCHAR(10),
	flight INTEGER,
	tailnum VARCHAR(10),
	origin VARCHAR(10),
	dest VARCHAR(10),
	air_time FLOAT,
	distance INTEGER,
	hour INTEGER,
	minute INTEGER,
	PRIMARY KEY (index),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (origin) REFERENCES airports(airport_id),
	FOREIGN KEY (dest) REFERENCES airports(airport_id)
	);
	
-- SELECT * FROM flights

CREATE TABLE routes (
	index INTEGER,
	airline_id VARCHAR(10),	
	dep_airport_id VARCHAR(10),
	des_airport_id VARCHAR(10),
	stops INTEGER,
	PRIMARY KEY (index)
-- 	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),
-- 	FOREIGN KEY (dep_airport_id) REFERENCES airports(airport_id),
-- 	FOREIGN KEY (des_airport_id) REFERENCES airports(airport_id)
	);
	
CREATE TABLE all_flights (
	index INTEGER,
	year INTEGER,	
	dep_airport VARCHAR(10),
	des_airport VARCHAR(10),
	alid INTEGER,
	airline_id VARCHAR(10),
	dom_fgn INTEGER,
	scheduled INTEGER,
	chartered INTEGER,
	total INTEGER,	
	PRIMARY KEY (index),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (dep_airport) REFERENCES airports(airport_id),
	FOREIGN KEY (des_airport) REFERENCES airports(airport_id)
=======
DROP TABLE IF EXISTS airlines CASCADE;
DROP TABLE IF EXISTS airports CASCADE;
<<<<<<< HEAD
DROP TABLE IF EXISTS dom_flights CASCADE;
DROP TABLE IF EXISTS int_flights CASCADE;
DROP TABLE IF EXISTS flight_routes CASCADE;
=======
DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS all_flights CASCADE;
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f


-------------------------------------------
-- Create airport table to import data
CREATE TABLE airports (
	airport_name VARCHAR(70),
	city VARCHAR(70),
	country VARCHAR(70),
	airport_id VARCHAR(10),
	latitude VARCHAR(20),
	longitude VARCHAR(20),
	altitude INTEGER,			
	PRIMARY KEY (airport_id)	
	);

-- SELECT * FROM airports;


-------------------------------------------
-- Create airlines table to import data
CREATE TABLE airlines (
	airline_name VARCHAR(70),
	airline_id VARCHAR(10),
	origin_country VARCHAR(70),
	active VARCHAR(5),
	PRIMARY KEY (airline_id)	
	);
	
<<<<<<< HEAD
-- SELECT * FROM airlines;


-------------------------------------------
-- Create domestic flights table to import data
CREATE TABLE dom_flights (
	id INTEGER,
	date DATE,			
	airline_id VARCHAR(10),	
	dep_airport VARCHAR(10),
	des_airport VARCHAR(10),
	total INTEGER,	
	PRIMARY KEY (id),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (dep_airport) REFERENCES airports(airport_id),
	FOREIGN KEY (des_airport) REFERENCES airports(airport_id)
=======
-- SELECT * FROM airlines
	
CREATE TABLE flights (
	index INTEGER,
	year INTEGER,
	month INTEGER,
	day INTEGER,	
	sched_dep_time INTEGER,	
	sched_arr_time INTEGER,
	airline_id VARCHAR(10),
	flight INTEGER,
	tailnum VARCHAR(10),
	origin VARCHAR(10),
	dest VARCHAR(10),
	air_time FLOAT,
	distance INTEGER,
	hour INTEGER,
	minute INTEGER,
	PRIMARY KEY (index),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (origin) REFERENCES airports(airport_id),
	FOREIGN KEY (dest) REFERENCES airports(airport_id)
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f
	);
	
SELECT * FROM dom_flights;


-------------------------------------------
-- Create international flights table to import data
CREATE TABLE int_flights (
	id INTEGER,
	date DATE,	
	dep_airport VARCHAR(10),
	des_airport VARCHAR(10),	
	airline_id VARCHAR(10),	
	total INTEGER,	
	PRIMARY KEY (id),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (dep_airport) REFERENCES airports(airport_id),
	FOREIGN KEY (des_airport) REFERENCES airports(airport_id)
	);
	
	SELECT * FROM int_flights;
	

-------------------------------------------
-- Create all global flight routes table not limited to NYC to import data
CREATE TABLE flight_routes (
	index INTEGER,
	airline_id VARCHAR(10),	
	dep_airport_id VARCHAR(10),
	des_airport_id VARCHAR(10),
	stops INTEGER,
	PRIMARY KEY (index)
-- 	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),
-- 	FOREIGN KEY (dep_airport_id) REFERENCES airports(airport_id),
-- 	FOREIGN KEY (des_airport_id) REFERENCES airports(airport_id)
	);
	
<<<<<<< HEAD
	SELECT * FROM flight_routes;
=======
CREATE TABLE all_flights (
	index INTEGER,
	year INTEGER,	
	dep_airport VARCHAR(10),
	des_airport VARCHAR(10),
	alid INTEGER,
	airline_id VARCHAR(10),
	dom_fgn INTEGER,
	scheduled INTEGER,
	chartered INTEGER,
	total INTEGER,	
	PRIMARY KEY (index),
	FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),	
	FOREIGN KEY (dep_airport) REFERENCES airports(airport_id),
	FOREIGN KEY (des_airport) REFERENCES airports(airport_id)
>>>>>>> c47801dd2537fdc071fcdf3c42af49cba01f08a7
	);
>>>>>>> 5a3f402a91cc5842270d03164089a92a5f66bd9f
