const express = require("express");
const cors = require("cors");
// Initialise app
const app = express();

// Add cors as middleware
app.use(cors());

// /login path handler
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

// Run the server on port 8080
app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
