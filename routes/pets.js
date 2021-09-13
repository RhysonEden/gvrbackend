const apiRouter = require("express");
const petRouter = apiRouter.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { searchPetIds, getAllPets } = require("../db");
const SALT_COUNT = 10;

// petRouter.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

petRouter.get("/pets", async (req, res, next) => {
  try {
    const allGvrs = await getAllPets();
    // getAllUsers();

    res.send({ allGvrs });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

petRouter.get("/:id", async (req, res, next) => {
  const petId = req.params.id;
  console.log("GVR IDDDDDDDDDD", petId);
  // console.log(req, "maybe?");
  try {
    const pet = await searchPetIds(petId);
    res.send({ pet });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = petRouter;
