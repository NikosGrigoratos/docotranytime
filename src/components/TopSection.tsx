import Clock from "@/assets/clock.svg?react";
import MainImage from "@/assets/main-image.svg?react";

const TopSection = () => {
  return (
    <section className="mt-6 md:mt-8">
      <div className="flex justify-center">
        <MainImage className="w-5/6" />
      </div>

      <h1 className="text-dark-blue font-bold text-[1.625rem] text-center mt-6">
        Get Matched with Top Mental Health Specialists
      </h1>

      <div className="flex items-center justify-center text-green mt-4">
        <div className="flex items-center justify-center text-xs font-medium bg-light-green rounded px-2">
          <Clock className="w-4 h-4" />
          <span className="ms-1">2 minutes to complete</span>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
