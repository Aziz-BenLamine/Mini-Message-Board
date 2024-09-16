const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/index');

const app = express();

//Enable ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use("/", indexRouter);
const PORT = 3000;
app.listen(PORT, '0.0.0.0',() => {
    console.log(`Express app listening to Port ${PORT}`);
});