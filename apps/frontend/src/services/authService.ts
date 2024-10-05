import axios from "axios";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  return await axios.post("/api/auth/register", { name, email, password });
};
