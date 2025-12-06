import Image from "next/image";
import bestGearImageMobile from "@/public/assets/shared/mobile/image-best-gear.jpg";
import bestGearImageTablet from "@/public/assets/shared/tablet/image-best-gear.jpg";
import bestGearImageDesktop from "@/public/assets/shared/desktop/image-best-gear.jpg";

function BrandStory({ className }: { className?: string }) {
  return (
    <section
      className={`mx-auto max-w-[1110px] px-6 ${className} flex flex-col gap-10 md:gap-[63px] md:px-10 lg:flex-row-reverse lg:items-center lg:gap-31.25 lg:min-[1150]:px-0`}
    >
      <div className="mx-auto">
        <Image
          src={bestGearImageMobile}
          alt="best audio gear image"
          width={0}
          height={0}
          loading="eager"
          className="rounded-lg md:hidden"
        />
        <Image
          src={bestGearImageTablet}
          alt="best audio gear image"
          width={0}
          height={0}
          loading="eager"
          className="hidden rounded-lg md:block lg:hidden"
        />
        <Image
          src={bestGearImageDesktop}
          alt="best audio gear image"
          width={0}
          height={0}
          loading="eager"
          className="hidden rounded-lg lg:block"
        />
      </div>
      <div className="space-y-8 md:mx-auto md:w-[80%] lg:w-full lg:flex-1">
        <p className="text-center text-[28px] leading-11 font-bold tracking-[1px] uppercase md:text-[40px] md:tracking-[1.43px] lg:text-left">
          bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </p>
        <p className="text-center text-[15px] leading-[25px] font-medium text-black opacity-50 lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

export default BrandStory;
