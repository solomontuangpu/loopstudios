import Logo from "./../assets/images/logo.svg";
import Menu from "./../assets/images/icon-hamburger.svg"
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const position = isMenuOpen ? "translate-x-[0px]" : "-translate-x-[1000px]";


  return (
    <header className=' max-w-[1440px] mx-auto pt-14 relative'>
      <nav className='flex justify-between mx-16 md:mx-6'>
        <img src={Logo} alt='' />

        <button className='hidden md:block' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <img src={Menu} />
        </button>

        <ul className='flex text-white space-x-7 font-alata md:hidden'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Careers</li>
          <li className='cursor-pointer'>Events</li>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Support</li>
        </ul>
      </nav>

      <MobileMenu position={position} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
