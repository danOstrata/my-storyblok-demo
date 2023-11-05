import Link from "next/link";
import { Nav } from "./Nav";
import { Socials } from "./Socials";

const Header = ({ isLight = false }) => {
  return (
    <header
      className={`flex h-16 items-center justify-between px-4 ${
        isLight ? "bg-[#F8F8FF]" : "bg-zinc-800"
      }`}
    >
      <Link href="/">
        <a>
          <svg
            strokeWidth="2"
            className={`h-6 w-6 ${isLight ? "stroke-zinc-800" : "stroke-slate-300"}`}
          >
            <use href="/logo.svg#logo" />
          </svg>
          <span className="sr-only">Portfolio Site</span>
        </a>
      </Link>
      <Nav isLight={isLight} />
      <div className="flex space-x-4">
        <Socials isLight={isLight} />
      </div>
    </header>
  );
};

export default Header;
