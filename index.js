// Library Imports
const express = require('express');
const session = require('express-session');

// Local Imports
const connectDB = require('./config/db');
require('dotenv').config();

// Middleware

// Connect to MongoDB
connectDB();

// Middleware
const app = express();

// Home Route
app.get('/', (req, res) => {
  res.send('Ready for your TimeSkip?');
});

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const userRoutes = require('./routes/user.route');
app.use('/api/v1/users', userRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
