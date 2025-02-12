import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "InternFair",
  description: "Created by IoT Lab, KIIT Web Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
