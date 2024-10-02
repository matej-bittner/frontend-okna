import { HeroDesc } from "@/data";
import HeroLinkButtons from "./HeroLinkButtons";

export const HeroText = () => {
  return <></>;
};

const Hero = () => {
  return (
    <div className=" bg-[url('/assets/hero.png')] bg-cover bg-right flex-1 pt-16 relative ">
      <div className="sm:hidden">
        <h1 className="text-center">Alfredo s.r.o.</h1>
        <div className=" max-w-[100%] w-[350px] ml-auto space-y-2 mt-[30%]">
          <div className="bg-dark-gray/50 py-3 pr-2 pl-4">
            <p>{HeroDesc[0]}</p>
          </div>
          <HeroLinkButtons />
        </div>
      </div>
      <div className="max-sm:hidden xl:hidden bg-dark-gray absolute h-fit w-[96%] md:w-[90%] left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex flex-col px-[8%] md:px-[4%] py-4 gap-3 md:gap-6">
        <h1 className="text-center">Alfredo s.r.o.</h1>

        <p>{HeroDesc[0]}</p>

        <HeroLinkButtons />
      </div>
    </div>
  );
};

export default Hero;
