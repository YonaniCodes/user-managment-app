"use client";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { Logout } from "../_lib/actions";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useLogout() {
  const router = useRouter();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => axios.post("/api/auth/logout"), // Ensure Logout returns a Promise.
    onSuccess: () => {
      router.push("/login");
      QueryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.error("Logout failed:", err);
    },
    onSettled: () => {
      console.log("Logout process completed (success or error)");
    },
  });

  return { isLoading, logout };
}
