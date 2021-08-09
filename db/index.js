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

async function searchGvrIds(gvrId) {
  try {
    console.log("Searching For Part #", gvrId);
    const { rows } = await client.query(`
    SELECT *
    FROM sites
    WHERE gvrid LIKE '%${gvrId}%'
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSites,
  searchGvrIds,
  client,
};
