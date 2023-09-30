const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routes/index")
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", route)

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
