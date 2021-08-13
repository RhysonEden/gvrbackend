const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  getAllSites,
  searchGvrIds,
  createUser,
  getUser,
  getUsersByID,
  getAllUsers,
  getUserByUsername,
  client,
} = require("./index");

async function createTables() {
  try {
    await client.query(`
                CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          email varchar NOT NULL
        );
      `);
  } catch (error) {
    throw error;
  }
}

// CREATE TABLE sites (
//   id SERIAL PRIMARY KEY,
//   gvrid varchar,
//   prov boolean
// );

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      console.log("First User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "nels",
          password: hashedPassword,
          email: "test1@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    await new Promise((resolve, reject) => {
      console.log("Second User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "james",
          password: hashedPassword,
          email: "test2@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    await new Promise((resolve, reject) => {
      console.log("Third User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "scott",
          password: hashedPassword,
          email: "test3@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });
    await new Promise((resolve, reject) => {
      console.log("Third User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "josh",
          password: hashedPassword,
          email: "test3@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });
    await new Promise((resolve, reject) => {
      console.log("Third User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "amber",
          password: hashedPassword,
          email: "test3@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    const userNels = await getUserByUsername("nels");
    const userJames = await getUserByUsername("james");
    const userScott = await getUserByUsername("scott");
    const userAmber = await getUserByUsername("amber");
    const userJosh = await getUserByUsername("josh");
    const users = await getAllUsers();
    const user1 = await getUsersByID(1);
    console.log(
      "username",
      userNels,
      userJames,
      userScott,
      userAmber,
      userJosh
    );
    console.log("All users", users);
    console.log("User #1", user1);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("END");
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());