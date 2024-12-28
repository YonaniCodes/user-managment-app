"use client";

import { cn } from "@/lib/utils";

import { useState, useEffect } from "react";
import { useUser } from "./_hooks/useUser";
import Welcome from "./_components/Welcome";
import PleaseLogin from "./_components/PleaseLogin";

export default function Page({ className }) {
  const { user, isLoading } = useUser();

  if (isLoading) return <div className="spinner"></div>;
  return (
    <div className="flex justify-center item-center w-full mt-12 ">
      <div className={cn("flex flex-col gap-6", className)}>
        {user ? <Welcome user={user} /> : <PleaseLogin />}
      </div>
    </div>
  );
}
