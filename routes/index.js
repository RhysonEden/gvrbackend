const apiRouter = require("express").Router();
require("dotenv").config();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const gvrRouter = require("./gvrs");
apiRouter.use("/gvrs", gvrRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
