# How to run this project in your local machine

## Table of Contents

- [Installation](#installation)
- [Run](#run)
- [Environment Variables](#environment-variables)

## Installation

1. **Clone the repository**

   ```
   git clone https://github.com/user/repository.git
   cd repository
   ```

2. **Install dependencies**
   ```
   npm install
   ```
3. **Set up environment variables**
   - Make .env file in src directory
   - Edit the .env file.
   - Example:
   ```
   PORT=5000
   DATABASEURL=[your mongodb connectiong url here]
   ```
   - Ensure MongoDB is running
4. **Run**
   ```
   npm run start:dev
   ```
