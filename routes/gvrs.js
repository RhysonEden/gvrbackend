const apiRouter = require("express");
const gvrRouter = apiRouter.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getAllSites, searchGvrIds, searchGvrAdd } = require("../db");
const SALT_COUNT = 10;

gvrRouter.get("/", async (req, res, next) => {
  try {
    const allGvrs = await getAllSites();
    // getAllUsers();

    res.send({ allGvrs });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// gvrRouter.get("/pets", async (req, res, next) => {
//   try {
//     const allGvrs = await getAllPets();
//     // getAllUsers();

//     res.send({ allGvrs });
//   } catch ({ name, message }) {
//     next({ name, message });
//   }
// });

gvrRouter.get("/:id", async (req, res, next) => {
  const gvrId = req.params.id;
  console.log("GVR IDDDDDDDDDD", gvrId);
  // console.log(req, "maybe?");
  try {
    const gvr = await searchGvrIds(gvrId);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

gvrRouter.get("/add/:id", async (req, res, next) => {
  const gvrAdd = req.params.id;
  console.log("GVR address", gvrAdd);
  // console.log(req, "maybe?");
  try {
    const add = await searchGvrAdd(gvrAdd);
    res.send({ add });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = gvrRouter;
