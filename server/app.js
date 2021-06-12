const Picture = require('./models/Picture')

require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = process.env.MONGODB_URI || "mongodb://localhost/carousel";

const cors = require('cors');
 
// ...
 
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

// default value for title local
const projectName = "carousel";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const pictures = require("./routes/pictures");
app.use("/api/pictures", pictures);

const text = require("./routes/text");
app.use("/api/text", text);
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
