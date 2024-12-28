import React from "react";
import SideNavigation from "../_components/SideBarNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideNavigation />
      {children}
    </div>
  );
}
