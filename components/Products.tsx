"use client";
import { AllProducts, AllTitles, ProductProps } from "@/data";
import { useState } from "react";
import ButtonLink from "./ButtonLink";
import Titles from "./Titles";

const ProductBox = ({
  title,
  price,
  desc,
  index,
  setSetselectedProduct,
  selectedProduct,
  isShowingAll,
}: ProductProps & {
  index: number;
  isShowingAll: boolean;
  setSetselectedProduct: React.Dispatch<React.SetStateAction<number>>;
  selectedProduct: number;
}) => {
  let mainImage = index === selectedProduct;

  let prevImage =
    (selectedProduct > 0 && selectedProduct - 1 === index) ||
    (selectedProduct === 0 && index === AllProducts.length - 1);
  let nextimage =
    selectedProduct + 1 === index ||
    (selectedProduct === AllProducts.length - 1 && index === 0);

  let mainClass = " translate-x-0 left-auto right-auto";

  if (prevImage) {
    mainClass =
      " left-0 sm:max-md:-translate-x-1/2 md:max-lg:-translate-x-1/3 z-20 ";
  }

  if (nextimage) {
    mainClass =
      " right-0 sm:max-md:translate-x-1/2 md:max-lg:translate-x-1/3  z-30";
  }

  return (
    <div
      onClick={() => setSetselectedProduct(index)}
      className={`${
        index != 0 && !isShowingAll ? "max-sm:hidden" : ""
      } bg-dark-gray relative flex flex-col w-[80%] h-[390px] max-sm:mb-6 lg:max-xl:mb-6 top-0 xl:py-8 xl:gap-8 max-w-[310px] sm:max-w-full sm:w-[320px] xl:w-[400px] xl:h-[450px] transition duration-500 sm:max-lg:absolute ${mainClass}`}
    >
      <div className="flex flex-col py-4 px-6 gap-6 xl:px-12 xl:p-0 h-full ">
        <h3 className="text-center">{title}</h3>
        <p className="flex-1  ">{desc}</p>
        <p className="text-lg lg:text-xl text-center max-xl:mb-6 xl:text-2xl  ">
          <span className="text-sm xl:text-base ">od</span> {price} Kč/m2
        </p>
      </div>
      <ButtonLink
        type="button"
        size="lg"
        className="max-xl:absolute max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:bottom-0 max-xl:translate-y-1/2 xl:w-fit xl:mx-auto  "
      >
        Poptat
      </ButtonLink>
    </div>
  );
};

const Products = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);
  const [selectedProduct, setSetselectedProduct] = useState(1);

  return (
    <section
      id="Produkty"
      className="sm:max-xl:mt-32 flex flex-col items-center  gap-4 sm:gap-6 xl:gap-10"
    >
      <Titles title={AllTitles[0].title} text={AllTitles[0].text} />
      {/* boxes */}
      <div className="  flex max-sm:flex-col items-center justify-center   gap-4 w-full relative h-fit sm:max-lg:h-[calc(390px+1.5rem)]  overflow-hidden lg:justify-around lg:max-w-[1800px] ">
        {AllProducts.map((product, i) => {
          return (
            <ProductBox
              index={i}
              setSetselectedProduct={setSetselectedProduct}
              selectedProduct={selectedProduct}
              isShowingAll={isShowingAll}
              key={product.title}
              desc={product.desc}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>

      <button
        onClick={() => setIsShowingAll(!isShowingAll)}
        className="text-[#BABABA] sm:hidden"
      >
        {isShowingAll ? "Skrýt" : "Zobrazit další produkty"}
      </button>
    </section>
  );
};

export default Products;
