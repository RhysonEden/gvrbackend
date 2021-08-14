import axios from "axios";

export async function getGVR(id) {
  try {
    const { data } = await axios.get(`/api/gvrs/${id}`);
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
