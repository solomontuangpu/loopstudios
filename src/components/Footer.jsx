import React from "react";

import Logo from "./../assets/images/logo.svg";
import FacebookIcon from "./../assets/images/icon-facebook.svg";
import InstagramIcon from "./../assets/images/icon-instagram.svg";
import PinterestIcon from "./../assets/images/icon-pinterest.svg";
import TwitterIcon from "./../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <section className='max-w-full bg-black py-20 mt-44'>
      <footer className='max-w-[1440px] mx-auto'>
        <main className=' mx-16 flex justify-between items-center'>
          <article className='space-y-3'>
            <img src={Logo} />
            <ul className='text-white flex space-x-6'>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </article>
          <article className='space-y-4'>
            <div className=' flex space-x-3'>
              <img src={FacebookIcon} alt='facebook icon' />
              <img src={TwitterIcon} alt='twitter icon' />
              <img src={PinterestIcon} alt='pinterest icon' />
              <img src={InstagramIcon} alt='instagram icon' />
            </div>
            <p className=' text-white'>
              {" "}
              &copy; 2024 Loopstudios. All rights reserved.{" "}
            </p>
          </article>
        </main>
      </footer>
    </section>
  );
};

export default Footer;
