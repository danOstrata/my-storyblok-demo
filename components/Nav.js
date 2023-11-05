import Link from "next/link";

export const Nav = ({ isLight = false }) => {
  return (
    <nav className="flex space-x-4">
      <Link href="/about">
        <a className={`${isLight ? "text-neutral-600" : "text-slate-300"}`}>About</a>
      </Link>
      <Link href="/work">
        <a className={`${isLight ? "text-neutral-600" : "text-slate-300"}`}>Work</a>
      </Link>
      <Link href="/contact">
        <a className={`${isLight ? "text-neutral-600" : "text-slate-300"}`}>Contact</a>
      </Link>
    </nav>
  );
};
