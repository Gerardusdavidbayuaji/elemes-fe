import { cn } from "@/utils/format";

interface buttonProps {
  title?: string;
  className?: string;
}

const Button = ({ title, className }: buttonProps) => {
  return (
    <div
      className={cn(
        "bg-[#8BAC3E] hover:bg-[#8BAC3E]/80 cursor-pointer rounded-full px-4 py-2 text-white font-normal text-base transition-all duration-300 ease-in-out",
        className
      )}
    >
      {title}
    </div>
  );
};

export default Button;
