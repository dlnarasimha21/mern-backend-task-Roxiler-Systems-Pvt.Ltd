# mern-backend-task-Roxiler-Systems-Pvt.Ltd
This project fetches product transactions from a third-party API, stores them in MongoDB, and provides APIs for listing transactions, generating sales statistics, and creating bar/pie charts. It supports search, pagination, and aggregated data responses.

# MERN Stack Backend - Product Transactions

This project is a backend application developed using the MERN stack (MongoDB, Express, React, and Node.js). It efficiently fetches product transaction data from a third-party API, stores it in a MongoDB database, and provides several robust APIs for querying and analyzing the data.
## Features

- **Data Fetching and Seeding**: Automatically fetches transaction data from a third-party API and seeds it into the MongoDB database for easy access.
- **List Transactions**: API to list all transactions with support for pagination and search functionality, allowing for efficient data retrieval.
- **Statistics API**: Provides insights on total sales and the number of items sold for a selected month, enabling detailed sales analysis.
- **Bar Chart API**: Supplies data for visual representation of item counts within defined price ranges, useful for understanding price distribution.
- **Pie Chart API**: Offers data for displaying item distribution based on unique product categories, helping to visualize category trends.
- **Combined API**: Merges results from multiple endpoints into a single response, streamlining data access for clients.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building scalable backend applications.
- **Express.js**: A minimalist web framework for Node.js, facilitating the creation of robust APIs.
- **MongoDB**: NoSQL database designed for high availability and scalability, used for storing transaction data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, simplifying data validation and schema management.
- **Axios**: A promise-based HTTP client for making requests to external APIs.

## Installation and Setup

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dlnarasimha21/mern-backend-task-Roxiler-Systems-Pvt.Ltd.git

Navigate to the project directory:
cd mern-backend-task-roxiler-systems

Install dependencies:
npm install

Set up MongoDB:
Ensure you have MongoDB installed and running.
Update the connection string in index.js to match your MongoDB setup.

Start the server:
npm start

API Endpoints
Method	Endpoint	Description
GET	/api/fetch-data	Fetches and seeds transaction data from a third-party API.
GET	/api/transactions	Lists all transactions with search and pagination support.
GET	/api/statistics	Fetches total sales and sold items for a specified month.
GET	/api/bar-chart	Provides data for a bar chart representing price ranges.
GET	/api/pie-chart	Offers data for a pie chart visualizing product categories.
GET	/api/combined-data	Combines results from multiple endpoints into a single response.

### Environment Variables

To run this application, create a `.env` file in the root directory of the project and use the following template:

Refer to the `.env.example` file for required environment variables and their formats. Make sure to replace the placeholder values with your actual configuration settings.

