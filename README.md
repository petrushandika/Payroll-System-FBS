# Payroll-System-FBS

## Overview

This project is a Payroll System built using React.js for the frontend, NestJS for the backend, and Prisma ORM for database interactions. It aims to provide a comprehensive solution for managing employee payroll, attendance, and related functionalities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)
- [Backend Usage](#backend-usage)
- [Database Migration](#database-migration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm
- PostgreSQL (or any other supported database)

## Installation

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the necessary environment variables. An example `.env` file might include:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
   SECRET_SAUCE=my_secret_key
   ```

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

### Backend

1. Navigate to the backend directory if you aren't already there:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   npm run start
   ```

### Frontend

1. Navigate to the frontend directory if you aren't already there:

   ```bash
   cd frontend
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Folder Structure

### Backend

- `src/`
  - `auth/`: Authentication-related functionality
  - `employee/`: Employee management
  - `salary/`: Salary-related operations
  - `working-day/`: Working day and attendance management
  - `user/`: User management
  - `prisma/`: Prisma schema and configuration
  - `middleware/`: Custom middleware
  - `config/`: Configuration files
  - `app.module.ts`: Main application module
  - `main.ts`: Entry point for the application

### Frontend

- `src/`
  - `components/`: Reusable UI components
  - `pages/`: Application pages
  - `hooks/`: Custom React hooks
  - `services/`: API service functions
  - `styles/`: CSS and styling files
  - `App.tsx`: Main application component
  - `index.tsx`: Entry point for the frontend application

## Configuration

### Backend

Ensure you have configured the `.env` file with the correct values for your database and other settings.

### Frontend

The frontend configuration can usually be found in the `.env` file within the `frontend` directory if needed.

## API Endpoints

Here are some common endpoints for the backend API:

- `POST /auth/login`: Authenticate and get a JWT token
- `GET /employees`: List all employees
- `POST /employees`: Create a new employee
- `PATCH /employees/:id`: Update employee details
- `DELETE /employees/:id`: Delete an employee
- `GET /salaries`: List all salaries
- `POST /salaries`: Create a new salary record

## Frontend Usage

- **Login Page**: Navigate to `/login` to authenticate and access the application.
- **Dashboard**: After logging in, you will be redirected to the main dashboard where you can manage employees, salaries, and attendance.

## Backend Usage

- **API Testing**: Use Postman or a similar tool to test API endpoints.
- **Database**: Ensure the database is properly set up and migrated before starting the backend server.

## Database Migration

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Run the Prisma migration:

   ```bash
   npx prisma migrate dev
   ```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any section or add more details specific to your project!
