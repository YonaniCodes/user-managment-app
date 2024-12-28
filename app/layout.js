import "@/app/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import SideNavigation from "./_components/SideBarNavigation";
import AuthProvider from "@/app/_components/UserProvider";
import { Toaster } from "react-hot-toast";
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
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "white",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
