"use client";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import ProfileMenue from "./ProfileMenue";
import { useUser } from "../_hooks/useUser";
import { use } from "react";

function Header() {
  const { isError, isLoading, user } = useUser();

  if (isLoading)
    return (
      <header className="border-b h-16 flex items-center justify-between">
        <Logo />
        <h1> Loading</h1>
      </header>
    );

  console.log(user);

  return (
    <header className="border-b h-16 flex items-center justify-between">
      <Logo />
      {user && <UserProfile user={user} />}
      {!user && <ProfileMenue />}
    </header>
  );
}

export default Header;
