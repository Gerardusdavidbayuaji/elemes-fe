import Image from "next/image";
import Container from "@/components/elements/Container";
import Button from "@/components/elements/Button";

export default function HomePage() {
  return (
    <section className="relative">
      <Image
        src="/images/hero-background.png"
        alt="elemes.id"
        width={207}
        height={50}
        className="h-screen w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-white/97 z-10">
        <Container className="h-full flex items-center">
          <div className="flex w-full items-center">
            {/* Tambahkan items-center */}
            {/* left content */}
            <div className="flex-1">
              {/* tagline */}
              <div>
                <h1 className="text-5xl font-medium text-[#8BAC3E]">
                  Good Food Us
                </h1>
                <h1 className="text-5xl font-medium text-[#8BAC3E]">
                  Good Mood
                </h1>
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
            {/* right content */}
            <div className="flex-1 flex justify-center">
              {" "}
              {/* Tambahkan justify-center */}
              <div className="relative">
                {" "}
                {/* Tambahkan wrapper relative */}
                {/* menu content */}
                <div className="bg-[#C4C4C4]/50 h-[500px] w-[500px] rounded-full flex items-center justify-center">
                  <Image
                    src="/images/hero-menu1.png"
                    alt="elemes.id"
                    width={207}
                    height={50}
                    className="h-[400px] w-[400px]"
                    priority
                  />
                </div>
                {/* rating content */}
                <div className="absolute -left-10 bottom-10">
                  {" "}
                  {/* Sesuaikan posisi */}
                  <div className="flex bg-white gap-5 py-5 px-10 rounded-lg justify-center items-center shadow-lg">
                    <Image
                      src="/images/hero-menu1.png"
                      alt="elemes.id"
                      width={207}
                      height={50}
                      className="h-14 w-14"
                      priority
                    />
                    <div>
                      <h3 className="text-black font-normal text-base">
                        Green Salad Tomato
                      </h3>
                      <p className="text-[#757575] font-normal text-sm">
                        Tomato
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-white/80 to-white/0 h-[200px] w-full" />
    </section>
  );
}
