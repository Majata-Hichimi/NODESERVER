//EPRESS JS WEBSERVER

//ERROR HANDLE
/**
 * express server definition
 */
try {
  const express = require("express"); //importation of the express application
  const app = express(); //app object
  const wiki = require("./alternate.js"); //import the wiki page
  const logger = require("morgan");
  const port = 4000; //port number

  app.use("/wiki", wiki);
  app.use(express.static("public")); //serve static files
  app.use(express.static("media"));
  app.use(userMiddleware); //this is a global middleware declaration

  //route definition
  /**
   * middleware is a piece of software that runs :
   * betwwen the time the request is recived and a response is sent
   * some middleware is global
   * some is specific to a certain action
   */

  /**
   * the example middleware is a log function
   */

  app.get("/", (req, res, next) => {
    console.log(`Majata is building systems`);
    res.send("SERVER IS UP AND RUNNING");
  });

  //route definition will all
  app.all("/", (req, res, next) => {
    res.send(`Majata is the engineer`);
    //commonly used to pass middleeware to another route
    console.log("STILL LEARNING");
    //pass control to next handler
  });

  app.get(
    "/about",
    /**passed as a parameter */ userAutentication,
    (req, res, next) => {
      res.send("Wiki");
      console.log("This is Majata's wiki");
    },
  );

  app.listen(port, () => {
    console.log(`THE SERVER IS UP ON PORT : ${port}`);
  });

  //**
  // another middleware declaration
  //  */
  function userMiddleware(req, res, next) {
    console.log(`This is a user log`);
    next();
  }

  /**
   * Middleware specific to the about page
   * passed as a parameter
   */
  function userAutentication(req, res, next) {
    if (
      req.query.admin === "false" /**pass booleans as strings in middleware */
    ) {
      next();
    } else {
      res.send("Authentication Failed");
    }
    console.log(`FAILED LOGIN BY USER`);
  }
} catch (ERROR) {
  //better error handling
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("SOMETHING BROKE");
  });
  console.error("ERROR CONSULT LOGS");
} finally {
  setTimeout(() => {
    console.log("SERVER RESPONDED");
  }, 3000);
}
