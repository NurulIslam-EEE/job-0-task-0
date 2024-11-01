import "./globals.css";
import Footer from "@/components/common/Footer";
import ThemeProvider from "@/context/ThemeProvider";
import Navigation from "@/components/common/Navigation";
import DarkMood from "./DarkMood";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <DarkMood>{children}</DarkMood>
      </ThemeProvider>
    </html>
  );
}
