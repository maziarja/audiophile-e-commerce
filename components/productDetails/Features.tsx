function Features({ features }: { features: string }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      <p className="text-[24px] leading-9 font-bold tracking-[0.86] uppercase md:text-[32px] md:tracking-[1.14px]">
        FEATURES
      </p>
      <p className="text-[15px] leading-[25px] font-medium text-pretty text-black opacity-50">
        {features}
      </p>
    </div>
  );
}

export default Features;
