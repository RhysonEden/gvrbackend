const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const gvrRouter = require("./gvrs");
apiRouter.use("/gvrs", gvrRouter);

module.exports = apiRouter;
