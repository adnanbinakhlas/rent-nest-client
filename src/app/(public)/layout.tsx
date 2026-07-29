import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: IProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
