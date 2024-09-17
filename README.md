# QuadB Node.js Internship Test

This project is a solution for the QuadB Node.js Internship Test for Freshers.

## Project Description

The goal of this test was to build a webpage that fetches and displays cryptocurrency data from the Wazirx API, closely resembling the functionality of [hodlinfo.com](https://hodlinfo.com). 

**Key Features:**

- **Data Fetching:** Fetches the top 10 cryptocurrency tickers from the Wazirx API ([https://api.wazirx.com/api/v2/tickers](https://api.wazirx.com/api/v2/tickers)) using Axios.
- **Data Storage:** Stores the fetched data (name, last price, buy price, sell price, volume, base unit) in a MongoDB database using Mongoose.
- **API Endpoint:** Creates a RESTful API endpoint (`/stocks`) using Express.js to serve the stored data to the frontend.
- **Dynamic Frontend:**  Uses HTML, CSS, and JavaScript to display the crypto data in a table format, dynamically updating the content with data fetched from the backend API. 
- **Data Validation:** Implements Zod for schema validation of the API response, ensuring data integrity.

## Technologies Used

- **Backend:** Node.js, Express.js, Mongoose, MongoDB, Axios, Zod, dotenv
- **Frontend:** HTML, CSS, JavaScript
- **Development Tools:** VS Code, Nodemon (for development)

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/QuadB-Backend-Intern-Task.git
   cd QuadB-Backend-Intern-Task/src
   ```
2. **Install Dependencies:**
   ```bash
   npm install -g pnpm
   pnpm install
   ```
3. **Configure Environment Variables:**
   - Create a .env file in the root directory.
   - Add your MongoDB connection UR
   ```bash
   MONGO_URI=your_mongodb_connection_string
   ```
   -Replace your_mongodb_connection_string with your actual MongoDB connection string.
4. **Start the Server:**
   ```bash
   pnpm run dev
   ```

QuadB-Backend-Intern-Task/
  - client/        
    - app.html
    - app.css
    - script.js
  - ...your backend folders (controllers, database, models, routers)
  - .env            
  - .gitignore
  - package-lock.json
  - package.json 
  - server.js      // Main backend server file 
  - README.md
