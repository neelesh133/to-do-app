import "../styles/app.scss";
import { Inter } from "next/font/google";
import Header from "../components/Server/Header/page";
import { ContextProvider } from "@/components/Client/Button/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description: "A todo app to keep track of your daily worklods ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
