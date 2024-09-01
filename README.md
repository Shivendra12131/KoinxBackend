# Crypto Transaction and Ethereum Price Tracker

This Node.js application allows users to fetch and store Ethereum transactions and prices. The application integrates with the Etherscan and CoinGecko APIs and uses MongoDB for storing data. It also provides an API to calculate a user's total expenses based on their Ethereum transactions.

## Features

### Task 1: Fetch and Store Crypto Transactions
- **Endpoint:** `GET /api/transactions/:address`
- **Description:** Fetches "Normal" Ethereum transactions for a given user address using the Etherscan API and stores them in MongoDB.
- **Parameters:**
  - `address` (path parameter): Ethereum address of the user.
- **Example Request:**
  ```bash
  GET http://localhost:3000/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d

  ### Task 2: Automated Ethereum Price Tracking
- **Functionality: Fetches the current Ethereum price every 10 minutes using the CoinGecko API and stores it in MongoDB.
- **Description: The system automatically schedules a job to fetch Ethereum prices every 10 minutes and stores them in the database.
- **No Manual Endpoint: This task is handled automatically by the server.
 
