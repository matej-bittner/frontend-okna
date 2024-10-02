import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  type: "button" | "link";
  children: React.ReactNode;
  href?: string;
  color?: "dark" | "light";
  size?: "sm" | "base" | "lg";
  buttonType?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const ButtonLink = ({
  type,
  buttonType = "button",
  size = "base",
  children,
  href,
  color = "dark",
  className,
  onClick,
}: ButtonLinkProps) => {
  const sizeClasses = {
    sm: "px-1 h-9 min-w-[90px] max-sm:text-sm sm:min-w-[110px] lg:min-w-[130px] lg:text-lg lg:h-10",
    base: "px-2.5 h-11 text-lg min-w-[95px] sm:min-w-[150px] xl:h-12 xl:text-xl",
    lg: "px-6 h-12 min-w-[120px] text-lg xl:text-xl xl:h-16 xl:min-w-[170px]",
  };
  const colorClasses =
    color === "light" ? "bg-white text-black" : "bg-black/20 text-white";

  const buttonClasses = cn(
    " font-light inline-flex items-center justify-center whitespace-nowrap hover:scale-110 transition duration-200 transform relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]", // Společné třídy
    sizeClasses[size], // Třídy pro velikost
    colorClasses, // Třídy pro barvu,
    className
  );

  if (type === "button") {
    return (
      <button onClick={onClick} type={buttonType} className={buttonClasses}>
        {children}
      </button>
    );
  }
  if (type === "link") {
    return (
      <a href={href || "#"} className={buttonClasses}>
        {children}
      </a>
    );
  } else return null;
};

export default ButtonLink;
