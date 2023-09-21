const express = require('express');
const app = express();
const port = 8000; // Chọn số cổng bạn muốn sử dụng (thay đổi nếu cần)

// Định nghĩa các route và xử lý logic ở đây
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});