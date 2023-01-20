# How to start

- Clone the repository using "git clone <https://github.com/girjesh-impact/postgres-sequelize.git>"
- Run the command **npm install** in root directory of this project to install dependencies
- Start the server using the command **node server.js**

<br>
<br>

# Available routes

There are three routes available in this project.

## Base url

http:localhost:5000

## GET /users/test

This route is a test route to confirm everything is working.

### Response

Response code | Response Type | Example
:------------ | :------------ | :--------------------------
200           | Success       | { msg: 'Test route works' }

<br>
<br>
<br>

## POST /users/create

This route creates a new user in the database.

### Request Body Parameters

Parameter | Type   | Example
:-------- | :----- | :-------------
email     | String | john@email.com
name      | String | John Doe

### Response

Response code | Response Type | Example
:------------ | :------------ | :----------------------------------------------------------
200           | Success       | { success: true, msg: 'User created successfully' }
400           | Failure       | { success: false, msg: 'Both name and email are required' }
500           | Error         | { success: false, msg: 'Some error occurred' }

<br>
<br>
<br>

## GET /users

This route fetches all the users from the database.

### Response

Response code | Response Type           | Example
:------------ | :---------------------- | :---------------------------------------------
200           | Success                 | List of users
500           | Error fetching database | { success: false, msg: 'Some error occurred' }

# Postgres CLI

Here are the functions and their commands to access and use postgres cli. When postgres is installed, it creates two databases as default namely template0 and template1\. These db cannot and must not be altered or delted beacuse they act as reference or base db for other databases that are created later.

Command                                             | Usage
:-------------------------------------------------- | :---------------------------------------------
createdb mydb (terminal command, not cli)           | Creates a db with name mydb
dropdb mydb (terminal command, not cli)             | Drops the db named mydb
psql [database name] (terminal command, not cli)    | postgres cli & connect to specified db.
psql template1 (terminal command)                   | Enter postgres cli when db names are not known
createuser name (terminal command)                  | Create a new user with name
dropuser name (terminal command)                    | Drops the user with name
\q                                                  | Quit psql terminal
\du                                                 | List database users
\l                                                  | List all databases
\c [database name]                                  | Connect to this database
\dt                                                 | List all tables of this database
\h                                                  | Help section - Shows some commands
All raw sql commands run here, examples below       | Ex - CREATE TABLE, INSERT, ... ,SELECT
CREATE TABLE tablename(field1 type1, field2 type2); | Creates a new table with the fields
DROP TABLE tablename;                               | Drops the table called tablename
INSERT INTO tablename VALUES ('value1', 'value2');  | Add new row to the table
COPY tablename FROM '/home/user/data.txt';          | Insert huge amount of data using .txt file
SELECT * FROM tablename;                            | Select all fields from table

# Sequelize Commands in Terminal

Here are the sequelize terminal commands to get started.

Command                  | Usage
------------------------ | :--------------------------------
npm install sequelize    | Install sequelize package
npm install pg pg-hstore | Install postgres helper package
sequelize init           | Initialse a template to work with
