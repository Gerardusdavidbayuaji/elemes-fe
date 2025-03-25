import Image from "next/image";

import Container from "@/components/elements/Container";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

export default function MainContent() {
  return (
    <section className="relative">
      <Image
        className="h-screen w-full object-cover"
        src="/images/hero-background.png"
        alt="elemes.id"
        width={207}
        height={50}
        priority
      />
      <div className="absolute inset-0 bg-white/97 z-10">
        <Container className="h-full w-full flex items-center">
          <LeftContent />
          <RightContent />
        </Container>
      </div>
      <div className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-white/80 to-white/0 h-[200px] w-full" />
    </section>
  );
}
