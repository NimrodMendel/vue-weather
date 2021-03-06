const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const weatherRouter = require("./routes/weather.routes");

const PORT = process.env.PORT || 5000;
const app = express();

/* Middleware */
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:8081",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/", weatherRouter);

/* Serve app */
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
