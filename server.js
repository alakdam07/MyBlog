require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const logs = require("./src/logs/logs");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

//connect to db
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(err);
  });

app.use("/api", logs);

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", index.html));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
