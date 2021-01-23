const e = require("express");
const express = require("express");
const app = express();
const port = 1234;
app.get("/",(req,res) => res.send("shooo jaooo"))
app.listen(port, ()=> 
console.log(`we ar running on ${port}`));