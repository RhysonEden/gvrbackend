const apiRouter = require("express");
const codesRouter = apiRouter.Router();
const { searchCodesFive, searchCodesThree } = require("../db");

codesRouter.get("/three/:id", async (req, res, next) => {
  const threeCode = req.params.id;
  console.log("GVR IDDDDDDDDDD", threeCode);
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
  console.log("GVR IDDDDDDDDDD", fiveCode);
  // console.log(req, "maybe?");
  try {
    const gvr = await searchCodesFive(fiveCode);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = codesRouter;
