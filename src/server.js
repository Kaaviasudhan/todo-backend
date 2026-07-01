require("dotenv").config();

const app = require("./app");
const { connectDatabase } = require("./config/database");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`
==================================
🚀 Server Started
🌍 Environment : ${process.env.NODE_ENV}
📡 http://localhost:${PORT}
==================================
`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
