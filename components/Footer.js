import { Nav } from "./Nav";
import { Socials } from "./Socials";

const Footer = () => (
  <footer className="bottom-0 w-full py-6 bg-gray-800 text-white">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <Nav />
      <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:justify-center md:gap-x-3  mt-4 md:mt-0">
        <Socials />
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-sm text-slate-300">Email: info@pinnaclephoto.com</p>
        <p className="text-sm text-slate-300">Phone: +1 123 456 7890</p>
      </div>
    </div>
  </footer>
);

export default Footer;
