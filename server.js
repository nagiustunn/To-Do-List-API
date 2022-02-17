const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./helpers/database/connectDatabase");
const router = require("./routers/index");
const errorHandler = require("./middlewares/errors/errorHandler");

const app = express();

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server listened ${PORT}: ${process.env.NODE_ENV}`);
});
