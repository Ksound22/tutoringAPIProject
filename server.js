/*
1. Creaete express server
2. Connect to MongoDB
3. Initialize express
4. Initialize express middleware
5. Create a simple get request route
6. Inject our routes
7. Listen to the app connection
*/

const express = require("express");
const connectDB = require("./db");
require("dotenv"); //Allows the usage of env variables

// Connect to DB
connectDB();

// Init express
const app = express();

// init middleware
app.use(express.json({ extended: false }));

// Create basic express route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the tutoring app project Ksound!" });
});

// Create port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
