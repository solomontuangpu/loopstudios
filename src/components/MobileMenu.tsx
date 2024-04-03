import Logo from "./../assets/images/logo.svg";
import CloseIcon from "./../assets/images/icon-close.svg";


type Props = {
    position : string,
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({position, isMenuOpen, setIsMenuOpen}: Props) => {
  return (
    <nav className={`hidden absolute w-full h-screen p-10 bg-black top-0 ${position} duration-700 md:block`}>
      <div className='flex justify-between'>
        <img src={Logo} alt='' />
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <img src={CloseIcon} alt='' />
        </button>
      </div>

      <ul className=' text-white space-y-10 pt-[200px] font-alata'>
        <li className='cursor-pointer uppercase text-4xl font-light font-josefin'>
          About
        </li>
        <li className='cursor-pointer uppercase text-4xl font-light font-josefin'>
          Careers
        </li>
        <li className='cursor-pointer uppercase text-4xl font-light font-josefin'>
          Events
        </li>
        <li className='cursor-pointer uppercase text-4xl font-light font-josefin'>
          Products
        </li>
        <li className='cursor-pointer uppercase text-4xl font-light font-josefin'>
          Support
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
