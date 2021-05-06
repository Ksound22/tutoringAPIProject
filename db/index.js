/*
1. Create a connection function for MongoDB
2. Start a local mongoDB server connection
*/

const mongoose = require("mongoose");
require("dotenv");
const { MONGO_URI } = process.env;

// Create connection function
// const connectDB = () => {
//   mongoose
//     .connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFIndAndModify: false,
//     })
//     .then(() => {
//       console.log("MongoDB Connected!");

//       //   Send data
//     })
//     .catch((err) => {
//       console.log("Error:", err);

//       //   Exit the connection
//       process.exit(1);
//     });
// };

// Connection function with async/await
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/TutoringAPIProject", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      //   useFIndAndModify: false,
    });
    console.log("MongoDB Connected!");

    // Send data
  } catch (error) {
    console.log("ERROR:", error);

    // Exit
    process.exit(1);
  }
};

module.exports = connectDB;
