import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Nasarawa State",
  description: "Nasarawa State Website Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body className="font-roboto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
