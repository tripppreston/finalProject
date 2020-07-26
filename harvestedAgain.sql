DROP DATABASE IF EXISTS HarvestedObject;
CREATE DATABASE HarvestedObject;
USE HarvestedObject;

CREATE TABLE IF NOT EXISTS Harvested (
harvestedID INT NOT NULL AUTO_INCREMENT,
harvestedType VARCHAR(10) NOT NULL,
harvestedName TEXT NOT NULL,
harvestedArea VARCHAR(50) NOT NULL,
harvestedPlanet TEXT NOT NULL,
harvestedSize VARCHAR(10) NOT NULL,
harvestedFood VARCHAR(50) NOT NULL,
PRIMARY KEY(harvestedID)





);

INSERT INTO Harvested (harvestedID, harvestedType, harvestedName, harvestedArea, harvestedPlanet, harvestedSize, harvestedFood)
	VALUES  (1, "Jewel", "Ruins Amethyst", "Ruins Exploration", "Naverius", "Large", "Dragon Altar Fried Snakehead"),
			(2, "Jewel", "Abandoned Mine Lapis Lazuli", "Abandoned Mine Exploration", "Lillipa", "Small", "Nightfall Province Needlefish Galette"),
            (3, "Mineral", "Naverius Rock", "Naverius", "Naverius", "Small", "Nightfall Province Needlefish Galette"),
            (4, "Jewel", "Forest Emerald", "Forest Exploration", "Naverius", "Medium", "Underground Shafts Mushroom Mix"),
            (5, "Mineral", "Wopal Rock", "Wopal", "Wopal", "Large", "Dragon Altar Fried Snakehead")