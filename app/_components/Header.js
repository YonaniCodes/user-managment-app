"use client";
import Logo from "./Logo";
import UserProfile from "./UserProfile";
import ProfileMenue from "./ProfileMenue";
import { useUser } from "../hooks/useUser";

function Header() {
  const { isError, isLoading, user } = useUser();

  if (isLoading)
    return (
      <header className="border-b h-16 flex items-center justify-between">
        <Logo />
        <ProfileMenue />
      </header>
    );

  return (
    <header className="border-b h-16 flex items-center justify-between">
      <Logo />
      {user && <UserProfile />}
    </header>
  );
}

export default Header;
