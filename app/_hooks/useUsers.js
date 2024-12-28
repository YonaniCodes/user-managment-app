import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUsers() {
  const {
    isLoading,
    isError,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    isLoading,
    isError,
    users,
  };
}

const getUsers = async () => {
  try {
    const response = await axios.get("api/users");
    console.log(response, "................................... users");
    return response.data.users;
  } catch (error) {
    throw error.message;
  }
};
