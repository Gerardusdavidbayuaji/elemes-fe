import Image from "next/image";
import FoodRating from "./FoodRating";

const RightContent = () => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="relative">
        {/* menu content */}
        <div className="bg-[#C4C4C4]/50 h-[500px] w-[500px] rounded-full flex items-center justify-center">
          <Image
            className="h-[400px] w-[400px]"
            src="/images/hero-menu1.png"
            alt="elemes.id"
            width={207}
            height={50}
            priority
          />
        </div>

        {/* rating content */}
        <FoodRating />
      </div>
    </div>
  );
};

export default RightContent;
