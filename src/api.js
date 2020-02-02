/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/routes/api.js
 */
const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("./middaleware/AuthMiddaleware");
const AuthController = require("./controller/AuthController");
const FriendController = require("./controller/FriendController");
const UserController = require("./controller/UserController");

/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = (app) => {
  router.post("/login", AuthController.login);
  router.post("/refresh-token", AuthController.refreshToken);

  // Sử dụng authMiddleware.isAuth trước những api cần xác thực
  router.use(AuthMiddleWare.isAuth);
  // List Protect APIs:
  router.get("/friends", FriendController.friendLists);
  router.post("/user",UserController.postUser);
  // router.get("/example-protect-api", ExampleController.someAction);

  return app.use("/", router);
}

module.exports = initAPIs;