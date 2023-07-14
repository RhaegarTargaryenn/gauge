import React, { useEffect, useState } from 'react';
import logo from '../Assests/logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';
import logo2 from '../Assests/logo2.png';

function NavBar() {
  const [scrollLogo, setScrollLogo] = useState(logo);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const navText = document.getElementsByClassName('nav-text');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add('bg-white');
        Array.from(navText).forEach((item) => {
          item.classList.add('text-black');
        });
        setScrollLogo(logo2);
      } else {
        navbar.classList.remove('bg-white');
        Array.from(navText).forEach((item) => {
          item.classList.remove('text-black');
        });
        setScrollLogo(logo);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="bg-[#19163a] w-full h-[100px] flex flex-row justify-between pt-10 fixed transition-all duration-500 ease-in-out"
    >
      <div className="text-white pl-10">
        <img src={scrollLogo} alt="logo" className="w-[130px] h-10" />
      </div>

      <div>
        <ul className="lg:flex text-white text-bold text-[20px] pl-5 md:hidden sm:hidden ">
          <li className="nav-text ">Home</li>
          <li className="pl-7 nav-text">About Us</li>
          <li className="pl-7 nav-text">Contact</li>
        </ul>
      </div>

      <div className="lg:flex mb-10 mr-7 md:hidden sm:hidden" >
        <div className="text-red-600 pr-4 pt-4 text-[30px]">
          <FiPhoneCall /> 
        </div>
        <div className="text-white text-bold text-[16px] pr-10">
          <p className="nav-text">Call Us</p>
          <p className="nav-text">9779982072</p>
        </div>
      </div>
      <span className='lg:hidden text-gray-400 sm:inline sm:mr-10'><RxHamburgerMenu/></span>
    </div>
  );
}

export default NavBar;
