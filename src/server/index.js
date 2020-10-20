require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const colors = require("colors");

const connectDB = require("./startup/db");
// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
connectDB();
require("./startup/routes")(app);
require("./startup/prod")(app);
// data jobs
require("./datajobs/cron")();

app.set("view engine", "pug");
app.set("views", "./views"); // to set default template

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}`.yellow.bold)
);

// Handled unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`Err: Unhandled Rejection ${err.message}`.red.bold);
  // Close server and exist
  server.close(() => process.exit(1));
});
