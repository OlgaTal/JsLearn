use voteforme;

set FOREIGN_KEY_CHECKS = 0;
truncate table voters;
truncate table candidates;
truncate table candidates_voters;
truncate table states;
set FOREIGN_KEY_CHECKS = 1;


INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Hillary', 'D', 'PRESIDENT', '2015-10-01', '2015-10-01', 99);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Trump', 'R', 'PRESIDENT', '2015-10-01', '2015-10-01', 99);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Joe', 'D', 'GOVERNOR', '2015-10-01', '2015-10-01', 1);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Jane', 'R', 'GOVERNOR', '2015-10-01', '2015-10-01', 1);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Jake', 'R', 'SENATOR', '2015-10-01', '2015-10-01', 1);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'John', 'R', 'SENATOR', '2015-10-01', '2015-10-01', 1);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Ashley', 'D', 'GOVERNOR', '2015-10-01', '2015-10-01', 2);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Anne', 'R', 'GOVERNOR', '2015-10-01', '2015-10-01', 2);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Alex', 'R', 'SENATOR', '2015-10-01', '2015-10-01', 2);

    INSERT INTO `candidates` (`version`, `name`, `party`, `position`, `created_at`, `updated_at`, `state_id`)
	VALUES ('0', 'Albert', 'R', 'SENATOR', '2015-10-01', '2015-10-01', 2);

-- +++++++++++++++++++++++++++++++++

INSERT INTO `voteforme`.`states` (`id`, `name`, `electoral_votes`) VALUES ('1', 'IL', '70');
INSERT INTO `voteforme`.`states` (`id`, `name`, `electoral_votes`) VALUES ('2', 'NY', '100');
INSERT INTO `voteforme`.`states` (`id`, `name`, `electoral_votes`) VALUES ('99', 'US', '0');

-- +++++++++++++++++++++++++++++++++

INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (1,0,'Frank',23,'B','M','2012-11-12 00:00:00','2012-11-12 00:00:00',1);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (2,0,'Zoe',21,'W','F','2012-11-12 00:00:00','2012-11-12 00:00:00',1);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (3,0,'Nancy',21,'W','F','2012-11-12 00:00:00','2012-11-12 00:00:00',2);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (5,0,'Edward',33,'H','M','2016-08-25 13:06:31','2016-08-25 13:06:31',2);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (6,0,'Joseph',44,'H','M','2016-08-25 13:06:52','2016-08-25 13:06:52',1);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (7,0,'Michael',22,'B','M','2016-08-25 13:07:06','2016-08-25 13:07:06',1);
INSERT INTO `voters` (`id`,`version`,`name`,`age`,`race`,`gender`,`created_at`,`updated_at`,`state_id`) VALUES (8,0,'Michelle',22,'B','F','2016-08-25 13:07:06','2016-08-25 13:07:06',1);
-- +++++++++++++++++++++++++++++++++

INSERT INTO `voteforme`.`candidates_voters` (`candidate_id`, `voter_id`) VALUES ('1', '2');
INSERT INTO `voteforme`.`candidates_voters` (`candidate_id`, `voter_id`) VALUES ('2', '2');

