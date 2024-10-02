"use client";
import { AllContacts, AllTitles } from "@/data";
import ButtonLink from "./ButtonLink";
import Titles from "./Titles";

const Contact = () => {
  let inputClassname =
    "w-full bg-main-gray h-8 outline-none placeholder:text-[#BABABA] pl-2 max-xl:text-sm max-w-[330px] sm:w-[45%] max-sm:mx-auto md:h-9 ";
  return (
    <section
      id="Kontakt"
      className="w-full flex flex-col items-center xl:space-y-4 "
    >
      <Titles title={AllTitles[1].title} />
      <div className="  flex max-xl:flex-col items-center xl:max-w-[90%] xl:w-[1400px] relative xl:justify-between gap-6 ">
        <div className="flex flex-col items-center w-[80%] max-w-[900px] xl:w-[45%] gap-4 sm:gap-6  mb-auto">
          <p className="xl:text-lg">{AllTitles[1].text}</p>
          <div className="flex max-md:flex-col gap-4  max-w-[150px] md:max-w-full text-center  md:w-full md:max-xl:justify-between xl:flex-col xl:gap-6">
            {AllContacts.map((contact) => {
              return (
                <div key={contact.title} className="space-y-1 ">
                  <p className="text-lg font-semibold ">{contact.title}</p>
                  <p className="">{contact.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-xl:hidden h-full max-h-[90%] mt-[1%] flex-1 flex border-r-2 border-light-gray absolute top-0 left-1/2" />

        <div className=" w-full xl:max-w-[45%] space-y-4">
          <p className="w-[80%] max-w-[900px] mx-auto xl:w-[95%] xl:text-lg">
            {AllTitles[1].secondText}
          </p>
          <div className="bg-dark-gray max-sm:mr-[5%] max-sm:pl-[5%] py-4 sm:w-[80%] sm:max-w-[900px] sm:mx-auto sm:px-6 sm:py-5 xl:w-full relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="max-sm:w-[80%] max-sm:ml-[10%] flex flex-col gap-4 md:gap-6"
            >
              <div className="w-full flex flex-col gap-3 items-center md:gap-4 ">
                <div className="flex max-sm:flex-col gap-3 justify-between w-full ">
                  <input
                    type="text"
                    placeholder="Jméno"
                    className={`${inputClassname}`}
                  />
                  <input
                    type="text"
                    placeholder="Telefon"
                    className={`${inputClassname}`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="E-mail"
                  className={`${inputClassname} sm:mr-auto`}
                />

                <textarea
                  placeholder="Zpráva"
                  className={`${inputClassname}  !h-24 sm:!h-32 md:!h-36 resize-none sm:w-full sm:max-w-full`}
                />
              </div>
              <div className="flex max-xl:flex-col gap-3">
                <p className="text-center text-sm text-[#BABABA]">
                  odesláním souhlasíte se zpracováním osobních informací za
                  účelem kontaktu
                </p>
                <ButtonLink
                  size="sm"
                  type="button"
                  buttonType="submit"
                  className="w-fit mx-auto  "
                >
                  Odeslat
                </ButtonLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
