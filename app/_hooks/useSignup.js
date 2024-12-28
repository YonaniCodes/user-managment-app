"use client";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useSignup() {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password, username }) =>
      axios.post("/api/auth/signup", { email, password, username }),
    onSuccess: (user) => {
      router.push("/");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { isLoading, signup };
}
