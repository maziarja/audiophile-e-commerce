import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

function Hero() {
  return (
    <section className="h-dvh bg-[#191919] bg-[url(/assets/home/mobile/image-header.jpg)] bg-contain bg-no-repeat min-[490px]:bg-center md:bg-[url(/assets/home/tablet/image-header.jpg)] md:bg-contain md:bg-top lg:bg-[url(/assets/home/desktop/image-hero.jpg)] lg:bg-auto lg:px-6">
      <div className="mx-auto max-w-[1110px]">
        <Navbar />
        <div className="mx-auto mt-27 w-3/4 text-center sm:w-3/5 lg:mx-0 lg:text-left">
          <p className="mb-4 text-sm tracking-[10px] text-white opacity-50 md:mb-6 lg:text-[14px]">
            NEW PRODUCT
          </p>
          <p className="mb-6 text-4xl leading-10 font-bold tracking-[1.29px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            XX99 MARK II HEADPHONES
          </p>
          <p className="mx-auto mb-7 text-[15px] leading-[25px] font-medium text-white opacity-75 md:mb-10 md:w-3/4 lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button size={"lg"}>SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
