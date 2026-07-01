require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
=====================================
🚀 Todo Backend Server Started
🌍 Environment : ${process.env.NODE_ENV || "development"}
📡 Server URL  : http://localhost:${PORT}
=====================================
`);
});
