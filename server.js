const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Setup express app
const app = express();

const cors=require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//routes
const users = require('./routes/user')
const transactions = require('./routes/transactions')
const recipes = require('./routes/recipe')
const component = require('./routes/components')

//route handle
app.use('/api/user/',users)
app.use('/api/transaction/',transactions)
app.use('/api/recipe/',recipes)
app.use('/api/component/',component)


// Configure Mongo
const db = "mongodb+srv://kareemkimo39:kareemesam-123@cluster0-ap5yc.mongodb.net/test?retryWrites=true&w=majority";

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));