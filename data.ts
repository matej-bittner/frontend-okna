export const NavLinks = [
  { title: "Produkty" },
  { title: "Kontakt" },
  { title: "Reference" },
];

export const HeroDesc = [
  "Zabýváme se výrobou a montáží oken s dobou dodání do měsíce. Hledáte někoho, kdo se postará o nižší tepelné uniky, lepší prosvícení prostoru, nebo prostě potřebujete vyměnit okna? Pokud jste si alespoň na jednu z těchto otázek “Ano” tak jste na správném místě.",
];

export const AllTitles = [
  {
    title: "Okna z Čech",
    text: "Naše okna jsou pečlivě vyráběna v srdci České republiky, s důrazem na kvalitu, preciznost a dlouhou životnost. Využíváme moderní technologie a poctivé řemeslo, abychom vám přinesli produkty, které splňují nejvyšší standardy a odolají i těm nejnáročnějším podmínkám. Podporujeme českou výrobu a zároveň vám poskytujeme to nejlepší, co náš trh nabízí.",
    secondText: "",
  },
  {
    title: "Kontaktujte nás",
    text: "Máte dotazy k našim produktům, chcete si domluvit konzultaci nebo potřebujete cenovou nabídku? Jsme tu pro vás! Neváhejte nás kontaktovat prostřednictvím níže uvedených údajů. Naši odborníci vám rádi poradí a pomohou s výběrem těch nejlepších oken pro váš domov.",
    secondText:
      "Můžete také vyplnit náš kontaktní formulář a my se vám ozveme co nejdříve. Těšíme se na vaši zprávu!",
  },
  {
    title: "Naši spokojení zákazníci",
    text: "Jsme hrdí na to, že jsme si získali důvěru mnoha zákazníků po celé republice. Podívejte se na některé z našich realizací a přečtěte si, co o nás říkají ti, kteří si již naše okna vybrali. Naše kvalita, spolehlivost a individuální přístup jsou zárukou, že budete s našimi službami maximálně spokojeni.",
    secondText: "",
  },
];

export type ProductProps = {
  title: string;
  price: number;
  desc: string;
};

export const AllProducts = [
  {
    title: "ThermoLine",
    price: 9900,
    desc: "Okna ThermoLine poskytují vynikající tepelnou izolaci a snižují náklady na energie. Díky moderním materiálům a elegantnímu designu zaručují komfortní a stylový domov. Jsou odolná a spolehlivá, ideální pro ty, kdo hledají kvalitu a dlouhou životnost.",
  },
  {
    title: "EcoView",
    price: 12900,
    desc: "Okna EcoView jsou navržena s ohledem na ekologii a energetickou úsporu. Využívají šetrné materiály, snižují uhlíkovou stopu a chrání životní prostředí. Poskytují vysokou efektivitu i moderní vzhled, což z nich činí ideální volbu pro udržitelný domov.",
  },
  {
    title: "ClearVision",
    price: 14900,
    desc: "Okna ClearVision nabízejí čistý výhled díky pokročilým skleněným výplním, které zajišťují maximální průhlednost. S jejich snadnou údržbou a elegantním designem přinášejí do vašeho domova více světla a stylu.",
  },
];

export const AllContacts = [
  {
    title: "Adresa",
    text: "U Rozvaděče 458, Pardubice, 602 00",
  },
  {
    title: "Telefon",
    text: "+420 159 951 537",
  },
  {
    title: "E-mail",
    text: "info@alfredo.cz",
  },
];

export const AllCompany = [
  { name: "Element Property", href: "#", img: "company1.png" },
  { name: "Roswell Group", href: "#", img: "company2.png" },
  { name: "Smart Home Property", href: "#", img: "company3.png" },
  { name: "Element Property", href: "#", img: "company1.png" },
  { name: "Roswell Group", href: "#", img: "company2.png" },
  { name: "Smart Home Property", href: "#", img: "company3.png" },
];
