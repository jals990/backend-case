import mongoose from "mongoose";
import "dotenv/config";

function connectToDatabase() {
  return new Promise((resolve, reject) => {

    mongoose.connect(
      process.env.DATABASEURL, {
    }
    );

    const db = mongoose.connection;
    db.on("error", (error) => {
      console.error(error);
      reject(error);
    });
    db.once("open", () => {
      console.log("MongoCloud Connected"); 
      resolve(db);
    });
  });
}

module.exports = connectToDatabase;
