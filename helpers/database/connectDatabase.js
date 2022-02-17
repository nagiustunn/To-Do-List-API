const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((e) => {
      console.error(e);
    });
};

module.exports = connectDatabase;
