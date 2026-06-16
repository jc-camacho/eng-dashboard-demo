-- Database schema for projects
CREATE TABLE projects (id SERIAL PRIMARY KEY, name VARCHAR(255), team_id INT);
CREATE TABLE teams (id SERIAL PRIMARY KEY, name VARCHAR(255));
CREATE TABLE members (id SERIAL PRIMARY KEY, team_id INT, email VARCHAR(255));