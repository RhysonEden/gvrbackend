const apiRouter = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { getUsersByID } = require("../db");

apiRouter.use(async (req, res, next) => {
  const auth = req.headers.authorization;
  const prefix = "Bearer ";

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUsersByID(id);
        console.log(req.user);
        next();
      } else {
        console.log("error");
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    console.log("error #2");
  }
});

const gvrRouter = require("./gvrs");
apiRouter.use("/gvrs", gvrRouter);

const petRouter = require("./pets");
apiRouter.use("/pets", petRouter);

const codesRouter = require("./codes");
apiRouter.use("/codes", codesRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: "Invalid Key",
    stack: err.stack,
  });
});

module.exports = apiRouter;
