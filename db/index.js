const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "techapp";

const client = new Client(
  `postgressql://postgres:james@localhost:5432/${DB_NAME}`
);

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

async function createUser({ username, password, email, admin }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email, admin)
      VALUES ($1, $2, $3, $4);
    `,
      [username, password, email, admin]
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

async function getAdminByUsername(username) {
  try {
    let end;
    const { rows } = await client.query(
      `
      SELECT admin 
      FROM users 
      WHERE username=$1
    `,
      [username]
    );
    Object.values(rows).forEach((key) => {
      console.log(key.admin);
      if (key.admin === "true") {
        return (end = true);
      } else {
        return (end = false);
      }
    });
    console.log(end);
    return end;
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

async function searchCodesThree(code) {
  try {
    console.log("Searching For GVR #", code);
    const { rows } = await client.query(`
    SELECT *
    FROM codesthree
    WHERE code ='${code}'
    `);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function searchCodesFive(code) {
  try {
    console.log("Searching For GVR #", code);
    const { rows } = await client.query(`
    SELECT *
    FROM codesfive
    WHERE code ='${code}'
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

async function searchGvrAdd(address) {
  try {
    console.log("Searching For Address", address);
    const { rows } = await client.query(`
    SELECT *
    FROM sites
    WHERE address ILIKE '%${address}%'
    `);
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
  searchCodesFive,
  searchCodesThree,
  getAdminByUsername,
  searchGvrAdd,
  client,
};
