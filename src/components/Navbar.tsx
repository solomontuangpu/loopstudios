import Logo from "./../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className=' max-w-[1440px] mx-auto pt-14'>
      <nav className='flex justify-between mx-16'>
        <img src={Logo} alt='' />
        <ul className='flex text-white space-x-7 font-alata'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Careers</li>
          <li className='cursor-pointer'>Events</li>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
