import axios from "axios";
let token = sessionStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export async function getGVR(id) {
  let head = config;
  if (!head) {
    let head = "Not Valid";
    return head;
  }
  try {
    let url = "api/gvrs/" + id;

    const { data } = await axios.get(url, head);

    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getGVRAdd(add) {
  let head = config;
  if (!head) {
    let head = "Not Valid";
    return head;
  }
  try {
    let url = "api/gvrs/add/" + add;

    const { data } = await axios.get(url, head);

    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    if (data.message === "error") {
      let data = { mess: 500 };
      return data;
    } else {
      sessionStorage.setItem("change", data.user.change);
      sessionStorage.setItem("admin", data.user.admin);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", data.user.username);
      sessionStorage.setItem(
        "email",
        "guardianresourcecenter@guardianfueltech.com"
      );
      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchThree(code) {
  // let code = 20;
  try {
    const { data } = await axios.get(`/api/codes/three/${code}`);

    let Id = data.gvr;
    let IdLength = data.gvr.length;
    if (IdLength === 0) {
      let Id = "Nothing Found, Please Try Again";
      return Id;
    } else {
      let codeResponse = Id.map((el) => {
        let resp = el.descr.toString();
        return resp;
      });
      return codeResponse[0];
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchFive(code) {
  try {
    const { data } = await axios.get(`/api/codes/five/${code}`);
    console.log(data);
    let Id = data.gvr;
    let IdLength = data.gvr.length;
    if (IdLength === 0) {
      let Id = "Nothing Found, Please Try Again";
      return Id;
    } else {
      let codeResponse = Id.map((el) => {
        let resp = el.descr.toString();
        return resp;
      });
      return codeResponse[0];
    }
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password, email) {
  let admin = false;
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
      email,
      admin,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAdminInfo(username) {
  try {
    const data = await axios.get(`/api/users/${username}`, {
      username,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function userUpdate(username, password) {
  try {
    const { data } = await axios.post("api/users/update", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function adminUpdate(username, admin) {
  try {
    const { data } = await axios.post("api/users/admin", {
      username,
      admin,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
