//grouped route definitions

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("WIKI HOME PAGE");
});

router.get("/wiki", (req, res) => {
  res.send("WIKI  PAGE");
});

router.get("/wiki/about", (req, res, next) => {
  res.send("This is Majata Hichimi's about page");
});

module.exports = router; //exported route group
