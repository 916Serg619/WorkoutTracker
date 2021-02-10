//require dependecies//
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//Establish PORT connection//
const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//Establish connection to MongoDB//
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// routes//
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/html.js"));
//Confirm app is running//
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});