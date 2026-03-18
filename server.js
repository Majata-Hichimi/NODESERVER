//EPRESS JS WEBSERVER

//ERROR HANDLE
try {
  const express = require("express"); //importation of the express application
  const app = express(); //app object
  const wiki = require("./alternate.js"); //import the wiki page
  const logger = require("morgan");
  const port = 4000; //port number

  app.use("/wiki", wiki);
  app.use(express.static("public")); //serve static files
  app.use(express.static("media"));

  //route definition
  app.get("/", (req, res) => {
    res.send("SERVER IS UP AND RUNNING");
  });

  //route definition will all
  app.all("/", (req, res, next) => {
    //commonly used to pass middleeware to another route
    console.log("STILL LEARNING");
    next(); //pass control to next handler
  });

  app.get("/about", (req, res, next) => {
    res.send("Wiki");
  });

  app.listen(port, () => {
    console.log(`THE SERVER IS UP ON PORT : ${port}`);
  });
} catch (ERROR) {
  console.error("ERROR CONSULT LOGS");
} finally {
  setTimeout(() => {
    console.log("SERVER RESPONDED");
  }, 3000);
}
