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
