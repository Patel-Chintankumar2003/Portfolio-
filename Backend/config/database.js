import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};


// MONGO_URI = "mongodb+srv://new_portfolio_admin:bdxUWYyIR5hneXNs@myportfolio.lk58f.mongodb.net/?retryWrites=true&w=majority&appName=myportfolio"

// MONGO_URI = "mongodb+srv://new_portfolio_admin:bdxUWYyIR5hneXNs@myportfolio.lk58f.mongodb.net/?retryWrites=true&w=majority&appName=myportfolio"