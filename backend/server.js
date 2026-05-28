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
    database: "student_management",
});

// CONNECT DATABASE
db.connect((err) => {
    if (err) {
        console.log("Connection failed");
        console.log(err);
    } else {
        console.log("Connected to MySQL");

        // Table Creation Query
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(100),
            email VARCHAR(100),
            phone VARCHAR(20),
            department VARCHAR(100),
            address TEXT,
            gender VARCHAR(20)
            )
        `;

        // Execute the Query
        db.query(createTableQuery, (err, result) => {
            if (err) {
                console.log("Table creation failed");
                console.log(err);
            } else {
                console.log("Students table created successfully");
            }
        });
    }
});

// INSERT API
app.post("/students", (req, res) => {
    // Store Data into Variables(using "object destructuring")
    const { full_name, email, phone, department, address, gender } = req.body;


});

// START SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
