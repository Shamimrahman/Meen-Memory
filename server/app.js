const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//for use in all file and this is imp for db connection
dotenv.config({ path: "./config.env" });
//use bodyparser for image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//use cors
app.use(cors());

//db
require("./db/connection");

//routing
const router = require("./Routes/routes");
app.use(router);
//connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The backend connect from ${port} `);
});
