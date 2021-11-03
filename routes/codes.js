const apiRouter = require("express");
const codesRouter = apiRouter.Router();
const { searchCodesFive, searchCodesThree, searchCodesCr } = require("../db");

codesRouter.get("/three/:id", async (req, res, next) => {
  const threeCode = req.params.id;
  console.log("GVR Three", threeCode);
  // console.log(req, "maybe?");
  try {
    const gvr = await searchCodesThree(threeCode);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

codesRouter.get("/five/:id", async (req, res, next) => {
  const fiveCode = req.params.id;

  console.log("GVR Five", fiveCode);
  // console.log(req, "maybe?");
  try {
    const gvr = await searchCodesFive(fiveCode);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

codesRouter.get("/cr/:id", async (req, res, next) => {
  const code = req.params.id;

  console.log("GVR Card Reader", code);
  // console.log(req, "maybe?");
  try {
    const gvr = await searchCodesCr(code);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = codesRouter;
