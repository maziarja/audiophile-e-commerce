type GalleryProps = {
  name: string;
  gallery: {
    first: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    second: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    third: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
};

function Gallery({ gallery, name }: GalleryProps) {
  return (
    <div className="grid gap-y-5 md:grid-cols-[1fr_1.43fr] md:gap-x-4.5">
      <div>
        <picture>
          <source media="(min-width:1024px)" srcSet={gallery.first.desktop} />
          <source media="(min-width:768px)" srcSet={gallery.first.tablet} />
          <img
            src={gallery.first.mobile}
            alt={`first image of ${name}`}
            className="w-full rounded-[10px]"
          />
        </picture>
      </div>

      <div>
        <picture>
          <source media="(min-width:1024px)" srcSet={gallery.second.desktop} />
          <source media="(min-width:768px)" srcSet={gallery.second.tablet} />
          <img
            src={gallery.second.mobile}
            alt={`second image of ${name}`}
            className="w-full rounded-[10px]"
          />
        </picture>
      </div>

      <div className="md:col-start-2 md:row-span-2 md:row-start-1">
        <picture>
          <source media="(min-width:1024px)" srcSet={gallery.third.desktop} />
          <source media="(min-width:768px)" srcSet={gallery.third.tablet} />
          <img
            src={gallery.third.mobile}
            alt={`third image of ${name}`}
            className="w-full rounded-[10px]"
          />
        </picture>
      </div>
    </div>
  );
}

export default Gallery;
