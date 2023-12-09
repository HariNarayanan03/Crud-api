# CRUD API

This CRUD API, built with Node.js and MongoDB, facilitates essential operations for a blogging website. It allows users to perform actions such as creating, reading, updating, and deleting blog posts. The API supports various data inputs, including title, article content, images, and dates.

## Features

- **Create:** Add new blog posts with titles, articles, images, and publication dates.
- **Read:** Retrieve existing blog posts with detailed information.
- **Update:** Modify the content, title, or other details of existing blog posts.
- **Delete:** Remove blog posts from the database.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing blog post data.
- **Mongoose:** ODM library for MongoDB and Node.js, used for data modeling.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository: `git clone https://github.com/HariNarayanan03/Crud-api.git`
2. Navigate to the project directory: `cd Crud-api`
3. Install dependencies: `npm install`
4. Configure MongoDB connection in `app.js` or use environment variables.

### Usage

1. Start the server: `npm start`
2. Access the API at `http://localhost:9000` (or the specified port).

## API Endpoints

- **POST /details:** Create a new blog post.
- **GET /details/:id:** Retrieve details of a specific blog post.
- **GET /details:** Retrieve a list of all blog posts.
- **PATCH /details/:id:** Update an existing blog post.
- **DELETE /details/:id:** Delete a blog post.

