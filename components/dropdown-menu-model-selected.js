import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const DropdownMenuModelSelected = ({ className = "", onClose }) => {
  return (
    <div
      className={`dropdown-menu-model w-full bg-[#b2dafa] border-[#000] border-solid border-b-[2px] box-border max-w-full h-[440px] xs:h-[350px] flex flex-col items-start pt-5 xs:pt-4 pl-[45px] xs:pl-[23px] pr-[45px] xs:pr-[23px] pb-10 xs:pb-8 gap-2.5 xs:gap-2 text-left lg:text-[29px] md:text-[26px] sm:text-[22px] xs:text-[20px] text-[#000] ${className}`}
    >
      <div className="self-stretch flex-1 overflow-hidden flex items-center justify-end pt-0 px-0 pb-0">
        <Image
          className="w-[39px] lg:w-[36px] md:w-[32px] sm:w-[24px] xs:w-[20px] h-[34px] lg:h-[30px] md:h-[28px] sm:h-[20px] xs:h-[18px] cursor-pointer select-none"
          width={39}
          height={34}
          sizes="100vw"
          alt="Close menu"
          src="/Dropdown-menu.svg"
          onClick={onClose}
        />
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          HOME
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/about"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          ABOUT
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/dev"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          DEV
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/arts"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          ARTS
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/model"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-0.25">■ </span> MODEL
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/contact"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          CONTACT
        </b>
      </Link>
    </div>
  );
};

DropdownMenuModelSelected.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DropdownMenuModelSelected;
