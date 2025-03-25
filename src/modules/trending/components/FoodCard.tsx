import Image from "next/image";
import { sampleTranding } from "@/utils/datas/trendings";

const FoodCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
      {sampleTranding.map((item) => (
        <div
          key={item.id}
          className="group p-5 rounded-md cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/hero-background.png"
              alt="Background"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

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
          <div className="relative z-20">
            <div className="h-36 w-36 rounded-md overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.food}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1 mt-4">
              <h3 className="text-black font-medium text-2xl">{item.food}</h3>
              <p className="text-[#8BAC3E] font-normal text-sm">
                {item.category_name}
              </p>
              <div className="flex mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={`yellow-${item.id}-${i}`}
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    className="mr-1 group-hover:fill-white transition-colors"
                  >
                    <path
                      d="M10.995 4.08249C10.9129 3.82968 10.6675 3.65592 10.3219 3.60572L7.58062 3.20734L6.3547 0.723356C6.2001 0.410124 5.95902 0.230469 5.69324 0.230469C5.42746 0.230469 5.18638 0.410124 5.03179 0.723356L3.80592 3.20732L1.06463 3.6057C0.718935 3.6559 0.473585 3.82968 0.391441 4.08245C0.309317 4.33523 0.405683 4.62002 0.655781 4.86383L2.63938 6.79731L2.17111 9.52757C2.10954 9.88669 2.21411 10.1015 2.3127 10.2184C2.42802 10.3551 2.59624 10.4305 2.78639 10.4305C2.93015 10.4305 3.08326 10.3883 3.24136 10.3052L5.69324 9.0161L8.14512 10.3051C8.30326 10.3883 8.45635 10.4304 8.60013 10.4304H8.60017C8.79034 10.4304 8.95856 10.3551 9.07388 10.2183C9.17245 10.1015 9.27704 9.88667 9.21545 9.52752L8.74711 6.79733L10.7307 4.86387C10.9808 4.62006 11.0772 4.33525 10.995 4.08249Z"
                      className="fill-[#FF8412]"
                    />
                  </svg>
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <svg
                    key={`gray-${item.id}-${i}`}
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    className="mr-1"
                  >
                    <path
                      d="M10.995 4.08249C10.9129 3.82968 10.6675 3.65592 10.3219 3.60572L7.58062 3.20734L6.3547 0.723356C6.2001 0.410124 5.95902 0.230469 5.69324 0.230469C5.42746 0.230469 5.18638 0.410124 5.03179 0.723356L3.80592 3.20732L1.06463 3.6057C0.718935 3.6559 0.473585 3.82968 0.391441 4.08245C0.309317 4.33523 0.405683 4.62002 0.655781 4.86383L2.63938 6.79731L2.17111 9.52757C2.10954 9.88669 2.21411 10.1015 2.3127 10.2184C2.42802 10.3551 2.59624 10.4305 2.78639 10.4305C2.93015 10.4305 3.08326 10.3883 3.24136 10.3052L5.69324 9.0161L8.14512 10.3051C8.30326 10.3883 8.45635 10.4304 8.60013 10.4304H8.60017C8.79034 10.4304 8.95856 10.3551 9.07388 10.2183C9.17245 10.1015 9.27704 9.88667 9.21545 9.52752L8.74711 6.79733L10.7307 4.86387C10.9808 4.62006 11.0772 4.33525 10.995 4.08249Z"
                      className="fill-[#C9C9C9]"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
