import Button from "@/components/elements/Button";

const LeftContent = () => {
  return (
    <div className="flex-1">
      {/* tagline */}
      <div>
        <h1 className="text-5xl font-medium text-[#8BAC3E]">Good Food Us</h1>
        <h1 className="text-5xl font-medium text-[#8BAC3E]">Good Mood</h1>
      </div>

      {/* description */}
      <div className="my-8">
        <p className="text-[#757575] font-normal text-base">
          I would think that conserving our natural resources
        </p>
        <p className="text-[#757575] font-normal text-base">
          should be a conservative position: Not to waste food, and
        </p>
        <p className="text-[#757575] font-normal text-base">
          not to throw away a lot of the food that we buy.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          title="Daftar Sekarang"
          className="shadow-lg shadow-[#666BE2]/30"
        />
        <Button
          title="About Us"
          className="bg-[#F2F2F2] hover:bg-[#F2F2F2]/90 text-[#333333] font-medium text-base"
        />
      </div>
    </div>
  );
};

export default LeftContent;
