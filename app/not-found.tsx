import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100svh-6rem)] lg:h-[calc(100svh-7.5rem)] flex flex-col gap-2 items-center justify-center">
      <h2>Stránka neexistuje</h2>
      <p>Tuto stránku jsme bohužel nenašli</p>
      <Link href="/" className="underline">
        Zpět domů
      </Link>
    </div>
  );
}
