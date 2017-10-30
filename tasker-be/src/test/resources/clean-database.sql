USE tasker_test;
truncate table tasks;
INSERT INTO `tasks` (`name`, `category`, `due`, `is_complete`, `created_at`, `updated_at`)
VALUES ('Get Milk', 'Home', '2016-08-11', b'0', '2011-03-18', '2012-04-18');
INSERT INTO `tasks` (`name`, `category`, `due`, `is_complete`, `created_at`, `updated_at`)
VALUES ('Get Bread', 'Home', '2016-08-11', b'1', '2011-03-17', '2012-04-19');
INSERT INTO `tasks` (`name`, `category`, `due`, `is_complete`, `created_at`, `updated_at`)
VALUES ('Get Apples', 'Home', '2016-08-11', b'1', '2011-03-16', '2012-04-22');
INSERT INTO `tasks` (`name`, `category`, `due`, `is_complete`, `created_at`, `updated_at`)
VALUES ('JavaScript', 'Home', '2016-08-11', b'1', '2011-03-18', '2012-05-11');
INSERT INTO `tasks` (`name`, `category`, `due`, `is_complete`, `created_at`, `updated_at`)
VALUES ('java', 'code', '2016-08-11', b'1', '2011-03-18', '2012-04-19');