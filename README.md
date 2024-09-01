# Crypto Transaction and Ethereum Price Tracker

This Node.js application allows users to fetch and store Ethereum transactions and prices. The application integrates with the Etherscan and CoinGecko APIs and uses MongoDB for storing data. It also provides an API to calculate a user's total expenses based on their Ethereum transactions.

## Features

### Task 1: Fetch and Store Crypto Transactions
- **Endpoint:** `GET /api/normal-transaction-address/:address`
- **Description:** Fetches "Normal" Ethereum transactions for a given user address using the Etherscan API and stores them in MongoDB.
- **Parameters:**
  - `address` (path parameter): Ethereum address of the user.
- **Example Request:**
  ```bash
  GET http://localhost:4000/api/normal-transaction-address/0xce94e5621a5f7068253c42558c147480f38b5e0d

### Task 2: Automated Ethereum Price Tracking
- **Functionality: Fetches the current Ethereum price every 10 minutes using the CoinGecko API and stores it in MongoDB.
- **Description: The system automatically schedules a job to fetch Ethereum prices every 10 minutes and stores them in the database.
- **No Manual Endpoint: This task is handled automatically by the server.

### Task 3: Get Total Expenses and Current Ethereum Price
- **Endpoint:** `GET /api/totalexpensesprice/:address`
- **Description:** Returns the total expenses of a user based on their transactions and the latest Ethereum price.
- **Expense Calculation: Expenses are calculated as gasUsed * gasPrice / 1e18 for each transaction.
- **Parameters:**
  - `address` (path parameter): Ethereum address of the user.
- **Example Request:**
  ```bash
  GET http://localhost:4000/api/totalexpensesprice/0xce94e5621a5f7068253c42558c147480f38b5e0d
Getting Started

Prerequisites

	•	Node.js: Make sure you have Node.js installed.
	•	MongoDB: Set up a MongoDB instance locally or use a cloud-based MongoDB service.
	•	Etherscan API Key: Sign up on Etherscan to get your free API key.

Installation

	1.	Clone the repository:
          git clone https://github.com/yourusername/crypto-tracker.git
          cd crypto-tracker
	2.	Install dependencies:
          npm install
 	3.	Set up environment variables by creating a .env file in the root directory:
          ETHERSCAN_API_KEY=your_etherscan_api_key
          MONGO_URI=your_mongodb_connection_string
          PORT=4000
	4.	Start the server:
          npm start
 	5.	The server will start running on http://localhost:4000.
  
  Usage

	•	Fetch Transactions: Use the /api/transactions/:address endpoint to fetch and store transactions.
	•	Check Expenses: Use the /api/expenses/:address endpoint to get the user’s total expenses and the current Ethereum price.
	•	Price Tracking: The server automatically tracks Ethereum prices every 10 minutes.
 Project Structure

	•	/api: Contains API route handlers.
	•	/models: MongoDB models for storing transactions and prices.
	•	/services: Services for interacting with external APIs (Etherscan, CoinGecko).
	•	/utils: Utility functions like error handling and scheduling tasks.
 
