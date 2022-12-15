const express = require('express');
const { Op } = require("sequelize");
const sequelize = require('./config/db.js');

// Initialize server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect to database
sequelize.authenticate().then(async () => {
    console.log('Connected to PostgreSQL');
    // Uncomment next two lines if there is a change in any model
    // await sequelize.sync({ alter: true });
    // console.log("All models were synchronized successfully.");

}).catch(err => console.log('Error connecting database: ' + err));


// Path to routes
const User = require('./api/routes/users');

// //Use routes
app.use('/users', User);

// Listen to port
const port = 5000;
app.listen(port, function () {
    console.log("Server running on port " + port);
});

