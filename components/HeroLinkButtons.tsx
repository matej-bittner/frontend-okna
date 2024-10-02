import ButtonLink from "./ButtonLink";

const HeroLinkButtons = () => {
  return (
    <div className=" space-x-4 sm:space-x-5 sm:max-xl:ml-auto xl:flex xl:justify-around ">
      <ButtonLink type="link" href="#Kontakt">
        Kontakt
      </ButtonLink>
      <ButtonLink type="link" href="#Reference" color="light">
        Reference
      </ButtonLink>
    </div>
  );
};

export default HeroLinkButtons;
