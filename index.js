// Please don't change the pre-written code

const express = require("express");
const path = require("path");
const server = express();

const renderStatic = () => {
  // Write your code here
const staticPath = path.join(__dirname, "public");
server.use(express.static(staticPath))
};

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});


server.get("/", (req, res) => {
  res.send("get method called!");
});


renderStatic();

module.exports = { renderStatic, server };








