import Image from "next/image";

import { sampleNavigations } from "@/utils/datas/navigations";
import Button from "@/components/elements/Button";

const Navbar = () => {
  return (
    <header className="bg-white container mx-auto p-4 lg:px-10 xl:px-20">
      <nav className="hidden lg:flex space-x-10 justify-between items-center">
        <Image
          src="/images/elemes-logo.svg"
          alt="elemes.id"
          width={207}
          height={50}
          className="h-10 w-auto cursor-pointer"
          priority
        />

        <div className="flex gap-8 cursor-pointer">
          {sampleNavigations.map((item) => (
            <h2
              key={item.id}
              className={`relative text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out ${
                item.id === "3"
              }`}
            >
              {item.page_name}
              {item.id === "3" && (
                <span className="absolute -top-4 -right-3 flex items-center justify-center bg-[#E7462D] rounded-2xl px-2 py-[2px] text-xs font-light text-white hover:text-white">
                  HOT
                </span>
              )}
            </h2>
          ))}
        </div>

        <div className="flex gap-5 items-center justify-center">
          <Button
            title="Masuk"
            className="bg-white hover:bg-[#F2F2F2] text-[#333333] font-medium text-base"
          />
          <Button title="Daftar Sekarang" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
