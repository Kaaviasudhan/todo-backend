const mongoose = require("mongoose");

const connectDatabase = async (mongoURI = process.env.MONGODB_URI) => {
  try {
    const connection = await mongoose.connect(mongoURI);

    console.log(
      `✅ MongoDB Connected: ${connection.connection.host}:${connection.connection.port}`
    );

    return connection;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    throw error;
  }
};

const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();

    console.log("📴 MongoDB Disconnected");
  } catch (error) {
    console.error("❌ MongoDB Disconnect Failed");
    throw error;
  }
};

module.exports = {
  connectDatabase,
  disconnectDatabase,
};
