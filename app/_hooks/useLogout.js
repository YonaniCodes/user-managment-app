"use client";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useLogout() {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => axios.post("/api/auth/logout"), // Ensure Logout returns a Promise.
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      window.location.reload();
      router.push("/login");
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
