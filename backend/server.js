const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});






// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
