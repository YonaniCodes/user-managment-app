import "@/app/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import SideNavigation from "./_components/SideBarNavigation";
import AuthProvider from "@/app/_components/UserProvider";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    // template: "%s ",
    default: "Welcom /MY user managment",
  },
  description: "The ultimate user managment system",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary-950 flex flex-col min-h-screen text-primary-100 relative`}
      >
        <div className="mx-10">
          <AuthProvider>
            <Header />
            <div className="flex">
              <SideNavigation />
              {children}
            </div>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
