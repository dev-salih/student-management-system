const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_management"
});

// CONNECT DATABASE
db.connect((err)=>{
  if (err) {
    console.log("Connection failed");
    console.log(err);
  } else {
    console.log("Connected to MySQL");
  }
});




// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
