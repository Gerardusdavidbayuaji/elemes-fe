import Image from "next/image";

import { sampleCategory } from "@/utils/datas/categorys";

const FoodCarousel = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-14">
        {sampleCategory.map((item) => (
          <div
            key={item.id}
            className="group p-5 rounded-md cursor-pointer relative overflow-hidden 
              transition-all duration-300 ease-in-out transform
              hover:scale-105 hover:shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
            >
              <Image
                src="/images/hero-background.png"
                alt="Background"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Color Overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: item.color,
                opacity: 0.9,
                transition: "opacity 300ms ease",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${item.color}00, ${item.color}FF)`,
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full">
              <div
                className="h-20 w-20 rounded-md overflow-hidden relative 
                    transition-transform duration-300 group-hover:scale-110"
              >
                <Image
                  src={item.image}
                  alt={item.id}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div
                className="space-y-1 mt-4 text-center 
                    transition-all duration-300 group-hover:mt-6"
              >
                <h3 className="text-[#333333] font-medium text-base">
                  {item.category_name}
                </h3>
                <p className="text-[#333333] font-light text-sm">
                  {item.items} <span>Items</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pr-20 gap-4 mt-12">
        <button className="px-4 py-3 rounded-full cursor-pointer bg-[#8BAC3E] text-white hover:bg-[#8BAC3E]/90 transition-colors duration-300">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full bg-white p-1 flex items-center justify-center">
              <Image
                src="/images/prev.png"
                alt="Previous"
                width={20}
                height={20}
                className="h-4 w-4 object-contain"
              />
            </div>
            <span className="font-normal text-sm text-white">PREV</span>
          </div>
        </button>
        <button className="px-4 py-3 rounded-full cursor-pointer bg-[#8BAC3E] text-white hover:bg-[#8BAC3E]/90 transition-colors duration-300">
          <div className="flex items-center justify-center gap-2">
            <span className="font-normal text-sm text-white">NEXT</span>
            <div className="rounded-full bg-white p-1 flex items-center justify-center">
              <Image
                src="/images/next.png"
                alt="Previous"
                width={20}
                height={20}
                className="h-4 w-4 object-contain"
              />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default FoodCarousel;
