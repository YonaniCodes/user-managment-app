"use client";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      axios.post("/api/auth/login", { email, password }),
    onSuccess: (user) => {
      router.push("/");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error("Incorrect password or email");
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
    throw new Error(error.message);
  }
}
