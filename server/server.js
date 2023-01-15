import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import logger from "morgan";
import userRoute from "./routes/userRoute.js";
import path from "path";
import { errorHandler } from "./middleware/errorHandler.js";
import { connect } from "./config/db.js";

connect();

//Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);

//Routes

//Error Handler
app.use(errorHandler);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));
}



const Port =5001;

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`.yellow.bold);
});
