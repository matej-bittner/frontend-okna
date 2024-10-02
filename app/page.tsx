import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HeroLinkButtons from "@/components/HeroLinkButtons";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Reference from "@/components/Reference";
import { HeroDesc } from "@/data";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <section className=" flex max-xl:flex-col h-[700px] max-xl:max-h-screen xl:h-[100svh] lg:min-h-[500px]">
        {/* left */}
        <div className="max-xl:hidden w-[50%] 2xl:w-[40%] flex items-center justify-center bg-[#343434]">
          <div className="h-[80%]  w-[455px]  flex flex-col justify-around ">
            <h1 className="text-center  ">Alfredo s.r.o.</h1>
            <p className="2xl:text-lg ">{HeroDesc[0]}</p>
            <HeroLinkButtons />
          </div>
        </div>
        {/* right */}
        <div className="flex-1   flex flex-col relative ">
          <Navbar />
          <Hero />
        </div>
      </section>
      <Products />
      <Contact />
      <Reference />
    </main>
  );
};

export default HomePage;
