"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

// Create the QueryClient instance
const queryClient = new QueryClient();
const AuthContext = createContext();

export default function UserProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext); // Custom hook to use AuthContext

  if (context === undefined) {
    throw new Error("Context used out its scope");
  }

  return context;
};
