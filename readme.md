# How to run this project in your local machine

## Installation

1. **Clone the repository**

   ```
   git clone https://github.com/Anik-nath/A2-Express-Ts-App-Server.git
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
   - Ensure MongoDB is running locally
4. **Run**
   ```
   npm run start:dev
   ```
5. **Show live**
   copy and paste this link in browser or you can use postman 
   ```
   http://localhost:5000/ 
   ```
6. **All the routes to show**
   - http://localhost:5000/api/products/ to show all products
   - http://localhost:5000/api/products/664c4ef425cfd66798abe37c to show single product by id
   - http://localhost:5000/api/products?searchTerm=iphone to search products
   - http://localhost:5000/api/orders/ to show all orders
   - http://localhost:5000/api/orders?email=anik@gmail.com to show orders by email