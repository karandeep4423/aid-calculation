const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const simulationRouter = require("./routes/simuationRoute");
const phoneRouter = require("./routes/phoneRoute");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// route
app.use("/api/auth", authRouter);
app.use("/api/simulation", simulationRouter);
app.use("/api/phone", phoneRouter);

// mongo connect
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  })
  .then(() => console.log("database connected"))
  .catch((error) => console.error("Connection error", error));

// global errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// server
app.listen(process.env.APP_PORT, () => {
  console.log(`app running on ${process.env.APP_PORT}`);
});
