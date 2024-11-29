ESD mini project:
The Alumni Registration Portal is a web application designed to facilitate alumni registration and login. It allows users to search for their profiles, log in with a secure password, or register as new alumni.

Tech Stack
Frontend:
HTML/CSS: For user interface design. JavaScript: For client-side logic. Bootstrap: For responsive design and pre-styled components. Postman (for testing APIs, during development).

Backend:
Spring Boot: For building RESTful APIs. Spring Security: For authentication and authorization. JWT (JSON Web Token): For secure user authentication. BCrypt: For password hashing. MySQL: As the relational database.

Database Schema
Database Name: academic_erp

Tables:
alumni:
id (Primary Key, Auto-Increment) first_name (VARCHAR, NOT NULL) last_name (VARCHAR, NOT NULL) email (VARCHAR, UNIQUE, NOT NULL) password (VARCHAR, NOT NULL) contact_no (VARCHAR)

alumni_organization:
id (Primary Key, Auto-Increment) alumni_id (Foreign Key, REFERENCES alumni(id)) position (VARCHAR) joining_date (DATE) leaving_date (DATE)

alumni_education:
id (Primary Key, Auto-Increment) alumni_id (Foreign Key, REFERENCES alumni(id)) degree (VARCHAR, NOT NULL) pursuing_year (YEAR, NOT NULL) joining_year (YEAR, NOT NULL) college_name (VARCHAR, NOT NULL) address (TEXT)
