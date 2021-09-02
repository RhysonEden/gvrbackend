const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "techapp";

// const client = new Client(
//   `postgressql://postgres:james@localhost:5432/${DB_NAME}`
// );

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function createUser({ username, password, email }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email)
      VALUES ($1, $2, $3);
    `,
      [username, password, email]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  console.log("User ", username, " is logging in");
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) {
      let user = 500;
      return user;
    }
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) {
      let user = 500;
      console.log(user);
      return user;
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(
      `SELECT username, email
    FROM users;
  `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllSites() {
  try {
    console.log("Trying");
    const { rows } = await client.query(
      `SELECT *
    FROM sites;
  `
    );
    console.log({ rows });
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllPets() {
  try {
    console.log("Trying");
    const { rows } = await client.query(
      `SELECT *
    FROM pets;
  `
    );
    console.log({ rows });
    return rows;
  } catch (error) {
    throw error;
  }
}

async function searchPetIds(id) {
  try {
    console.log("Searching For GVR #", id);
    const { rows } = await client.query(`
    SELECT *
    FROM pets
    WHERE id ='${id}'
    `);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function searchGvrIds(gvrId) {
  try {
    console.log("Searching For GVR #", gvrId);
    const { rows } = await client.query(`
    SELECT *
    FROM sites
    WHERE gvrid LIKE '%${gvrId}%'
    `);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSites,
  searchGvrIds,
  createUser,
  getUser,
  getUsersByID,
  getAllUsers,
  getUserByUsername,
  getAllPets,
  searchPetIds,
  client,
};
