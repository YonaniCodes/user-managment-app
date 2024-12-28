"use client";
import { Button } from "@/components/ui/button";
import MyAvatar from "../_SHADCN/MyAvatar";

import { useAuth } from "./UserProvider";
import { Logout } from "../_lib/actions";
import { useRouter } from "next/navigation";
import useLogout from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";

export default function UserProfile() {
  const { logout, isLoading } = useLogout();
  const router = useRouter();
  async function handleLogout() {
    logout();
  }
  const { user } = useUser();
  console.log(user, "..............");
  return (
    <>
      <div className="flex gap-4 items-center">
        {user.username} <MyAvatar fallback={user.username} />
        <Button size="sm" onClick={handleLogout}>
          {isLoading ? "loading" : "Logout"}
        </Button>
      </div>
    </>
  );
}
