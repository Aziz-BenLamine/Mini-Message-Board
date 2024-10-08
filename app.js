const express = require("express");
const path = require("path");
const app = express();

// Enable ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
const indexRouter = require("./routes/index"); // Ensure this is correctly required
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express app listening to Port ${PORT}`);
});
