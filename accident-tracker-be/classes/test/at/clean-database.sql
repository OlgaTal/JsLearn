use AccidentTracker;
truncate table Persons;
INSERT INTO `AccidentTracker`.`persons` (`name`, `age`, `gender`, `payment`) VALUES ('Chuck', '18', 'M', '80');
truncate table Cars;
INSERT INTO `AccidentTracker`.`cars` (`make`, `model`, `year`, `person_Id`) VALUES ('Honda', 'Accord', '2013', '1');