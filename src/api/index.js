import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/users");
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
    sessionStorage.setItem("change", data.user.change);
    sessionStorage.setItem("admin", data.user.admin);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    sessionStorage.setItem(
      "email",
      "guardianresourcecenter@guardianfueltech.com"
    );
    return data;
  } catch (error) {
    throw error;
  }
}
