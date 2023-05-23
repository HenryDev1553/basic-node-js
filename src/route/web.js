import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", function (req, res) {
    res.send("Im henry");
  });
  return app.use("/", router);
};

export default initWebRoute;
