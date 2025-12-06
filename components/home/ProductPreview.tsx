import Image from "next/image";

import speakerZX9Mobile from "@/public/assets/home/mobile/image-speaker-zx9.png";
import speakerZX9Tablet from "@/public/assets/home/tablet/image-speaker-zx9.png";
import speakerZX9Desktop from "@/public/assets/home/desktop/image-speaker-zx9.png";

import { Button } from "@/components/ui/button";

function ProductPreview({ className }: { className?: string }) {
  return (
    <section
      className={`mx-auto flex max-w-[1110px] flex-col gap-6 px-6 md:gap-8 md:px-10 lg:gap-12 lg:min-[1150]:px-0 ${className}`}
    >
      <div className="flex h-150 flex-col items-center justify-center gap-8 overflow-hidden rounded-lg bg-[#d87d4a] bg-[url(/assets/pattern-circles.svg)] bg-cover bg-position-[center_top_-8rem] bg-no-repeat md:h-180 md:gap-16 md:bg-auto md:bg-position-[center_top_-19rem] lg:grid lg:h-140 lg:grid-cols-2 lg:bg-cover lg:bg-position-[left_-13rem_top_-5rem]">
        <Image
          src={speakerZX9Mobile}
          alt="speakerZX9-image"
          width={172.25}
          height={207}
          className="md:hidden md:scale-115"
        />
        <Image
          src={speakerZX9Tablet}
          alt="speakerZX9-image"
          width={197.21}
          height={237}
          className="hidden md:block lg:hidden"
        />
        <Image
          src={speakerZX9Desktop}
          alt="speakerZX9-image"
          width={410.23}
          height={493}
          className="mt-19 ml-35 hidden lg:block"
        />

        <div className="flex flex-col items-center justify-center gap-6 lg:items-start lg:pt-34 lg:pl-44">
          <p className="mx-auto w-1/2 text-center text-[36px] leading-10 font-bold tracking-[1.29px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:mx-0 lg:w-1/2 lg:text-left">
            ZX9 SPEAKER
          </p>
          <p className="mx-auto w-[90%] text-center text-[15px] leading-[25px] font-medium text-white opacity-75 sm:w-[50%] lg:mx-0 lg:w-[90%] lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            size={"lg"}
            className="z-9 bg-black hover:bg-[#4c4c4c] active:bg-[#4c4c4c] md:mt-4"
          >
            see product
          </Button>
        </div>
      </div>
      <div className="flex h-80 flex-col items-start justify-center rounded-lg bg-[#f1f1f1] bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] bg-cover bg-no-repeat md:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]">
        <div className="ml-6 space-y-8 md:ml-15.5 lg:ml-23.75">
          <p className="text-[28px] font-bold tracking-[2px] uppercase">
            zx7 speaker
          </p>
          <Button size={"lg"} variant={"outline"}>
            see product
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-2.5 lg:gap-7.5">
        <div className="h-50 w-full rounded-lg bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] bg-cover md:h-80 md:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)] lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)]" />
        <div className="flex h-50 w-full items-center rounded-lg bg-[#f1f1f1] md:h-80">
          <div className="ml-6 flex flex-col items-start gap-8 md:ml-10 lg:ml-23.75">
            <p className="text-[28px] font-bold tracking-[2px] uppercase">
              yx1 earphones
            </p>
            <Button size={"lg"} variant={"outline"}>
              see product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;
