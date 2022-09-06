import data from "../data.json";

interface HeaderProps {
  isRootPage?: boolean;
}
export default function Header({ isRootPage }: HeaderProps) {
  return (
    <header className="p-6 tablet:px-10 tablet:py-7 desktop:p-10 flex justify-between border border-E5E5E5 border-b">
      <a href="/" title="Home">
        <span className="sr-only">Home</span>
        <img className="block h-8" src="/logo.webp" alt="" />
      </a>
      <a
        href={`${isRootPage ? `/${data[0].slug}` : "/"}`}
        className="text-7D7D7D hover:text-black text-xxs tracking-[0.121em] uppercase flex justify-center items-center"
      >
        {`${isRootPage ? "Start" : "Stop"} slideshow`}
      </a>
    </header>
  );
}
