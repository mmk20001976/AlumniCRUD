# Alumni Registration System

## 1. Project Goals
The goal of this project is to create an interactive and easy-to-use interface for alumni to register their details, including their education history and organization experience. Additionally, administrators can view and manage alumni records. The system ensures secure access to alumni data, accessible only to authenticated users.

## 2. Architecture Overview

### Backend
We use **Spring Boot** to build the backend of our project, which follows a layered architecture for clean separation of concerns. The architecture consists of four main layers:

1. **Controller Layer**  
   The controller layer acts as the entry point for incoming requests from the client. It delegates the logic to the service layer and returns the appropriate response. In our project, we have two controller layers:
   - **AuthController**: Handles user authentication requests (login).
   - **AlumniController**: Handles requests related to alumni information (CRUD operations for alumni, education, and organization).

2. **Service Layer**  
   This layer contains the business logic. It interacts with the repository layer to persist and retrieve data. The service layer is represented by the **AlumniService** class.

3. **Repository Layer**  
   The repository layer interacts directly with the database. It handles CRUD operations using JPA (Java Persistence API). The repositories in our system include:
   - **AlumniRepo**: For interacting with the **Alumni** table.
   - **AlumniEducationRepo**: For interacting with the **Alumni_Education** table.
   - **AlumniOrganizationRepo**: For interacting with the **Alumni_Organization** table.

### Frontend
The frontend of the application is built using **React**. The interface is designed to allow alumni to easily register their personal, educational, and professional details. The system is designed to be intuitive for users and administrators. The frontend interacts with the backend via RESTful API calls. Key sections in the frontend include:
- **Login page**: For authenticating users.
- **Alumni Registration page**: For alumni to enter their personal, education, and organization details.
- **Admin Dashboard**: For administrators to manage alumni records.

---

## 3. Authentication and Login

We implement authentication using **JWT (JSON Web Tokens)** to securely manage user sessions. Here's how it works:

1. The user provides their login credentials (username/password).
2. The backend verifies the credentials and generates a JWT token.
3. The JWT token is returned to the frontend on successful authentication.
4. The frontend stores the JWT token securely (in localStorage or cookies).
5. For any subsequent requests to protected resources, the frontend sends the JWT token as part of the Authorization header.
6. If the token expires, the frontend will either redirect the user to the login page or handle token refresh.

---

## 4. Database Design

We will have the following entities and their corresponding tables:

### Entities & Tables

1. **Alumni**  
   Table: **alumni**
   - **id** (Primary Key, Auto-generated)
   - **first_name** (VARCHAR)
   - **last_name** (VARCHAR)
   - **email** (VARCHAR, Unique)
   - **contact_number** (VARCHAR)
   - **organization_id** (Foreign Key referencing organization details)

2. **Alumni_Education**  
   Table: **alumni_education**
   - **id** (Primary Key, Auto-generated)
   - **alumni_id** (Foreign Key, references alumni.id)
   - **degree** (VARCHAR)
   - **passing_year** (YEAR)
   - **joining_year** (YEAR)
   - **college_name** (VARCHAR)
   - **address** (VARCHAR)

3. **Alumni_Organization**  
   Table: **alumni_organization**
   - **id** (Primary Key, Auto-generated)
   - **alumni_id** (Foreign Key, references alumni.id)
   - **organization** (VARCHAR)
   - **position** (VARCHAR)
   - **joining_date** (DATE)
   - **leaving_date** (DATE)

---
