const mongoose = require("mongoose");

const connectDatabase = async (mongoURI) => {
  const uri = mongoURI || process.env.MONGODB_URI;

  await mongoose.connect(uri);

  console.log("✅ MongoDB Connected");
};

const disconnectDatabase = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectDatabase,
  disconnectDatabase,
};