"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      axios.post("/api/auth/login", { email, password }),
    onSuccess: (user) => {
      router.push("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { isLoading, login };
}

async function loginUser({ email, password }) {
  console.log(email, password);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      { email, password },
      { withCredentials: true }
    );
    console.log(res);
    const { user } = res.data;
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
