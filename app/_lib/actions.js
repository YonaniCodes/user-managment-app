"use server";

import axios from "axios";
const BASE_URL = process.env.BACKEND_URL;
console.log(BASE_URL);
export async function Login(formData) {
  const { email, password } = formData;

  console.log(formData);
  try {
    const res = await axios.post(
      `/api/auth/login`,
      { email, password },
      { withCredentials: true }
    );

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function Logout() {
  try {
    const res = axios.get(`${BASE_URL}api/v1/users/logout`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
