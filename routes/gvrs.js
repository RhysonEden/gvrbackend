const apiRouter = require("express");
const gvrRouter = apiRouter.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getAllSites, searchGvrIds } = require("../db");
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

gvrRouter.get("/:id", async (req, res, next) => {
  const gvrId = req.params.id;
  try {
    const gvr = await searchGvrIds(gvrId);
    res.send({ gvr });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = gvrRouter;
