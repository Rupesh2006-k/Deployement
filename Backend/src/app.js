const express = require("express");
const app = express();
let cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
let cors = require("cors");
// middleware

app.use(express.json());
app.use(cookieParser());
const CLIENT_URL = process.env.CLIENT_URL || "https://deployement-sigma.vercel.app";

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

// test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/api/user/auth", userRouter);
app.use("/api/product", productRouter);

module.exports = app;
