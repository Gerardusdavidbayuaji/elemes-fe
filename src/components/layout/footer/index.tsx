import Image from "next/image";
import Link from "next/link";

import Container from "@/components/elements/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="bg-[#F9FFF6] text-[#757575] w-full p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 rounded-lg mb-5 font-normal text-md">
          {/* location */}
          <div className="col-span-2">
            <Image
              src="/images/elemes-logo.svg"
              alt="elemes.id"
              width={207}
              height={50}
              className="h-9 w-auto cursor-pointer"
              priority
            />
            <div className="mt-4">
              <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,</p>
              <p>Kecamatan Setiabudi, Kota Jakarta Selatan,</p>
              <p>Daerah Khusus Ibukota Jakarta 12950</p>
            </div>

            <div className="flex space-x-2 mt-8">
              {/* email */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#8BAC3E] cursor-pointer group transition-all duration-300 ease-in-out">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className="h-4 w-auto stroke-[#8BAC3E] group-hover:stroke-white transition-all duration-300 ease-in-out"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M1.5 3.66699L8.075 8.05033C8.34888 8.23306 8.67075 8.33058 9 8.33058C9.32925 8.33058 9.65112 8.23306 9.925 8.05033L16.5 3.66699M3.16667 12.8337H14.8333C15.2754 12.8337 15.6993 12.6581 16.0118 12.3455C16.3244 12.0329 16.5 11.609 16.5 11.167V2.83366C16.5 2.39163 16.3244 1.96771 16.0118 1.65515C15.6993 1.34259 15.2754 1.16699 14.8333 1.16699H3.16667C2.72464 1.16699 2.30072 1.34259 1.98816 1.65515C1.67559 1.96771 1.5 2.39163 1.5 2.83366V11.167C1.5 11.609 1.67559 12.0329 1.98816 12.3455C2.30072 12.6581 2.72464 12.8337 3.16667 12.8337Z" />
                </svg>
              </div>

              {/* phone */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#8BAC3E] cursor-pointer group transition-all duration-300 ease-in-out">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto stroke-[#8BAC3E] group-hover:stroke-white transition-all duration-300 ease-in-out"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z" />
                </svg>
              </div>

              {/* instagram */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#8BAC3E] cursor-pointer group transition-all duration-300 ease-in-out">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="h-6 w-auto fill-[#8BAC3E] group-hover:fill-white transition-all duration-300 ease-in-out"
                  fill="none"
                >
                  <path d="M9.99992 3.87187C11.9959 3.87187 12.2326 3.87935 13.0213 3.91548C15.0471 4.00768 15.9934 4.9689 16.0856 6.97982C16.1217 7.76786 16.1286 8.00458 16.1286 10.0005C16.1286 11.9971 16.1211 12.2332 16.0856 13.0213C15.9928 15.0303 15.049 15.9934 13.0213 16.0856C12.2326 16.1217 11.9971 16.1292 9.99992 16.1292C8.00396 16.1292 7.76723 16.1217 6.97919 16.0856C4.94835 15.9928 4.00706 15.0272 3.91486 13.0206C3.87873 12.2326 3.87125 11.9965 3.87125 9.99992C3.87125 8.00396 3.87935 7.76786 3.91486 6.97919C4.00768 4.9689 4.95146 4.00706 6.97919 3.91486C7.76786 3.87935 8.00396 3.87187 9.99992 3.87187ZM9.99992 2.52441C7.9697 2.52441 7.71553 2.53314 6.91814 2.56927C4.20329 2.69386 2.69448 4.20017 2.56989 6.91752C2.53314 7.71553 2.52441 7.9697 2.52441 9.99992C2.52441 12.0301 2.53314 12.2849 2.56927 13.0823C2.69386 15.7972 4.20017 17.306 6.91752 17.4306C7.71553 17.4667 7.9697 17.4754 9.99992 17.4754C12.0301 17.4754 12.2849 17.4667 13.0823 17.4306C15.7947 17.306 17.3072 15.7997 17.4299 13.0823C17.4667 12.2849 17.4754 12.0301 17.4754 9.99992C17.4754 7.9697 17.4667 7.71553 17.4306 6.91814C17.3085 4.20578 15.8003 2.69448 13.0829 2.56989C12.2849 2.53314 12.0301 2.52441 9.99992 2.52441V2.52441ZM9.99992 6.16125C7.87999 6.16125 6.16125 7.87999 6.16125 9.99992C6.16125 12.1198 7.87999 13.8392 9.99992 13.8392C12.1198 13.8392 13.8386 12.1205 13.8386 9.99992C13.8386 7.87999 12.1198 6.16125 9.99992 6.16125ZM9.99992 12.4918C8.6238 12.4918 7.50808 11.3767 7.50808 9.99992C7.50808 8.6238 8.6238 7.50808 9.99992 7.50808C11.376 7.50808 12.4918 8.6238 12.4918 9.99992C12.4918 11.3767 11.376 12.4918 9.99992 12.4918ZM13.9906 5.11281C13.4947 5.11281 13.0929 5.51462 13.0929 6.00987C13.0929 6.50512 13.4947 6.90693 13.9906 6.90693C14.4858 6.90693 14.887 6.50512 14.887 6.00987C14.887 5.51462 14.4858 5.11281 13.9906 5.11281Z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[#333333] font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Cupcake
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Pizza
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Kebab
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Salmon
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Dougnut
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#333333] font-semibold">About Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#757575] hover:text-[#2b2b2b] font-normal text-base transition-all duration-300 ease-in-out"
                >
                  Report Problem
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#333333] font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm">
              Get now free 50% discount for all products on your first order
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-b-black border-t-black border-l-black p-2 w-full rounded-l-md focus:outline-none"
              />
              <button className="bg-[#8BAC3E] hover:bg-[#8BAC3E]/80 text-white px-3 rounded-r-md cursor-pointer transition-all duration-300 ease-in-out">
                SEND
              </button>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className="h-3 w-auto cursor-pointer stroke-[#8BAC3E] group-hover:stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M1.5 3.66699L8.075 8.05033C8.34888 8.23306 8.67075 8.33058 9 8.33058C9.32925 8.33058 9.65112 8.23306 9.925 8.05033L16.5 3.66699M3.16667 12.8337H14.8333C15.2754 12.8337 15.6993 12.6581 16.0118 12.3455C16.3244 12.0329 16.5 11.609 16.5 11.167V2.83366C16.5 2.39163 16.3244 1.96771 16.0118 1.65515C15.6993 1.34259 15.2754 1.16699 14.8333 1.16699H3.16667C2.72464 1.16699 2.30072 1.34259 1.98816 1.65515C1.67559 1.96771 1.5 2.39163 1.5 2.83366V11.167C1.5 11.609 1.67559 12.0329 1.98816 12.3455C2.30072 12.6581 2.72464 12.8337 3.16667 12.8337Z" />
                </svg>
                <p className="text-black">elemesid@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="h-4 w-auto stroke-[#8BAC3E] group-hover:stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z" />
                </svg>
                <p className="text-black">0888 1111 2222</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[#757575] text-sm text-center justify-center">
          © 2021 ELEMES ID. All RIGHTS RESERVED
        </h3>
      </Container>
    </footer>
  );
};

export default Footer;
