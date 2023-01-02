const express = require("express");
const app = express();
const path = require("path")
var staticFolder = express.static(path.join(__dirname, "public"));
app.use(staticFolder);
app.listen(8080);
console.log("PORT : 8080");