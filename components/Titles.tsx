const Titles = ({ title, text }: { title: string; text?: string }) => {
  return (
    <div
      className={`${
        text ? "gap-6" : "pb-6"
      } flex flex-col items-center w-[80%] max-w-[900px]  gap-6 pt-6 sm:pt-10 md:pt-14 xl:pt-16`}
    >
      <h2>{title}</h2>
      {text && <p className="xl:text-lg">{text}</p>}
    </div>
  );
};

export default Titles;
