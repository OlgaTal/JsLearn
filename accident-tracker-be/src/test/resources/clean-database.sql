use AccidentTracker;
truncate table Persons;
INSERT INTO `AccidentTracker`.`persons` (`name`, `age`, `gender`, `payment`) VALUES ('Chuck', '18', 'M', '80');
truncate table Cars;
INSERT INTO `AccidentTracker`.`cars` (`make`, `model`, `year`, `person_Id`) VALUES ('Honda', 'Accord', '2013', '1');

truncate table Claims;

INSERT INTO `AccidentTracker`.`claims` (`claim_date`, `claim_time`, `location`, `car_id`) VALUES ('2012-10-02', '16:52:30', 'Chicago', '1');
