"use client";
import { Button } from "@/components/ui/button";
import MyAvatar from "../_SHADCN/MyAvatar";
import useLogout from "../_hooks/useLogout";

export default function UserProfile({ user }) {
  const { logout, isLoading } = useLogout();
  async function handleLogout() {
    logout();
  }

  const { username } = user;

  return (
    <>
      <div className="flex gap-4 items-center">
        {username} <MyAvatar fallback={username} />
        <Button size="sm" onClick={handleLogout}>
          {isLoading ? "loading" : "Logout"}
        </Button>
      </div>
    </>
  );
}
