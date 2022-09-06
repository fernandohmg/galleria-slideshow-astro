export const Header = () => {
  // const isHomePath = location.pathname === "/";

  return (
    <header className="p-6 tablet:px-10 tablet:py-7 desktop:p-10 flex justify-between border border-E5E5E5 border-b">
      <a href="/" title="Home">
        <span className="sr-only">Home</span>
        <img className="block h-8" src="/logo.webp" alt="" />
      </a>
      <a
        href={`${true ? "/1" : "/"}`}
        className="text-7D7D7D hover:text-black text-xxs tracking-[0.121em] uppercase flex justify-center items-center"
      >
        {`${true ? "Start" : "Stop"} slideshow`}
      </a>
    </header>
  );
};
