-- Creating local database with following psql commands.  If using ElephantSQL, use:
-- psql -d <url from elephantSQL> -f todo_postgres_create.sql
-- from terminal with pwd in project root folder
-- \l to see list of current databases
-- CREATE DATABASE todo_database;

-- After creating database with above command,
-- \c todo_database 
--  to connect to todo_database
-- \dt
-- to see tables in current database

-- creating table & schema for task data
CREATE TABLE task (
  "task_id" SERIAL NOT NULL,
  "done" BOOL NOT NULL,
  "value" INTEGER
);

-- creating table & schema for rewards data
CREATE TABLE rewards (
  "rewards_id" SERIAL NOT NULL,
  "done" BOOL NOT NULL,
  "value" INTEGER
);


-- \dt 
-- again to confirm tables have been created