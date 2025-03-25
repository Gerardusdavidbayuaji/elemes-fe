import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface layoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: layoutsProps) => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center w-full min-h-screen overflow-auto">
        <Navbar />
        <main className="flex-1 w-full transition-all duration-300 no-scrollbar scroll-smooth bg-amber-50">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
