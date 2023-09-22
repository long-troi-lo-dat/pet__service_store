const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const port = 8000;


const app = express()
app.use(cors())

// Connect Database
const db = mysql.createConnection({
  host: "localhost",
  user:"root",
  password:"",
  database:""
})

// Định nghĩa các route và xử lý logic ở đây
app.get('/', (req, res) => {
  res.send('Setup successfully from backend');
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});