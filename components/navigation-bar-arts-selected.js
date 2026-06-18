import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import DropdownMenuArtsSelected from "./dropdown-menu-arts-selected";

const NavigationBarArtsSelected = ({ className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {isDropdownOpen && (
        <>
          {/* Overlay sombre */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={closeDropdown} />
          <DropdownMenuArtsSelected 
            className="fixed top-0 left-0 z-50" 
            onClose={closeDropdown}
          />
        </>
      )}
      {!isDropdownOpen && (
        <div
          className={`navigation-bar-arts w-[1524px] bg-[#090909] border-[#fff] border-solid border-b-[1px] box-border max-w-full h-[101px] lg:h-[90px] md:h-[80px] sm:h-[60px] xs:h-[50px] overflow-hidden flex items-center justify-between py-0 px-[45px] lg:px-[35px] md:px-[30px] sm:px-[20px] xs:px-[15px] gap-0 text-left text-[29px] lg:text-[26px] md:text-[24px] sm:text-[18px] xs:text-[16px] text-[#fff] ${className}`}
        >
      <Link href="/" className="w-[50px] lg:w-[45px] md:w-[40px] sm:w-[30px] xs:w-[25px] relative bg-[#fff] box-border h-[50px] lg:h-[45px] md:h-[40px] sm:h-[30px] xs:h-[25px] cursor-pointer" />
      <div className="flex items-center justify-center py-0 pl-[135px] lg:pl-[110px] md:pl-[90px] sm:pl-[60px] xs:pl-[40px] gap-16 lg:gap-14 md:gap-12 sm:gap-8 xs:gap-6 lg:flex md:flex md:w-auto md:[align-self:unset] md:items-center md:justify-center md:pl-0 md:box-border sm:flex">
        <div className="flex items-center justify-center md:hidden xs:hidden sm:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit]"
            id="pageButton"
            href="/about"
          >
            ABOUT
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden xs:hidden sm:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit]"
            id="pageButton"
            href="/dev"
          >
            DEV
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden xs:hidden sm:hidden">
          <Link
            className="cursor-pointer relative leading-[121.1%] font-medium text-[inherit] underline"
            id="pageButton"
            href="/arts"
          >
            ARTS
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden xs:hidden sm:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit] md:block"
            id="pageButton"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
        <Image
          className="w-[39px] lg:w-[36px] md:w-[32px] sm:w-[24px] xs:w-[20px] relative h-[34px] lg:h-[30px] md:h-[28px] sm:h-[20px] xs:h-[18px] hidden md:block md:cursor-pointer xs:block sm:block sm:cursor-pointer select-none"
          width={39}
          height={34}
          sizes="100vw"
          alt=""
          src="/Dropdown-menu-white.svg"
          onClick={toggleDropdown}
        />
      </div>
    </div>
      )}
    </>
  );
};

NavigationBarArtsSelected.propTypes = {
  className: PropTypes.string,
};

export default NavigationBarArtsSelected;
