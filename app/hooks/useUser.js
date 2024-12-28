import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUser() {
  const {
    isLoading,
    isError,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return {
    isLoading,
    isError,
    user,
  };
}

const getCurrentUser = async () => {
  try {
    const response = await axios.get("api/auth/me");
    console.log(response, "...................................");
    return response.data;
  } catch (error) {
    throw error.message;
  }
};
