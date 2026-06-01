"use client";
import Link from "next/link";
import PropTypes from "prop-types";

const FooterHomeAboutContact = ({ className = "" }) => {
  const onLinkedInLogoClick = () => {
    window.open("https://www.linkedin.com/in/tom-effernelli/");
  };

  const onGithubLogoClick = () => {
    window.open("https://github.com/tom-effernelli");
  };

  const onMakeMyInboxClick = () => {
    window.location.href =
      "mailto:tom.effernelli@gmail.com?subject=Hello there!";
  };

  return (
    <div
      className={`footer-home-about-contact w-full bg-[#090909] h-[693px] sm:h-[600px] xs:h-[475px] overflow-hidden flex flex-col items-start pt-14 xs:pt-8 pb-20 xs:pb-10 pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[54px] sm:gap-[40px] xs:gap-[30px] text-left text-[35px] xs:text-[30px] text-[#fff] md:box-border ${className}`}
    >
      <div className="relative leading-[121.1%] font-extrabold lg:text-3xl md:text-[30px] sm:text-[28px] xs:text-[25px]">
        <p className="m-0">TOM</p>
        <p className="m-0">EFFERNELLI</p>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start lg:gap-2.5 md:gap-2.5 sm:gap-1 xs:gap-0.5 text-[29px] xs:text-[25px]">
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:items-start md:justify-end"
            id="pageButton"
            href="/"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              HOME
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:hidden sm:hidden md:hidden"
            id="pageButton"
            href="/dev"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              DEV
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
            <div className="flex items-center py-0 pl-[7px] pr-0 gap-5">
              <button
                className="cursor-pointer [border:none] p-0 w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                style={{ backgroundImage: "url('/LinkedInLogo.png')" }}
                id="socialsButton"
                onClick={onLinkedInLogoClick}
              />
              <button
                className="cursor-pointer [border:none] p-0 w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                style={{ backgroundImage: "url('/GithubLogo.png')" }}
                id="socialsButton"
                onClick={onGithubLogoClick}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
            id="pageButton"
            href="/about"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              ABOUT
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/dev#tech-stack"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Tech stack
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-xl [text-decoration:underline] leading-[121.1%] font-light text-[#fff] text-left inline-block lg:text-[17px] md:text-sm"
              id="socialsButton"
              onClick={onMakeMyInboxClick}
            >
              Make my inbox a happy place!
            </button>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/about#who-am-i"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Who am I?
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] xs:w-full border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:flex sm:flex sm:flex-1 md:flex md:flex-1"
            id="pageButton"
            href="/dev"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              DEV
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/dev#projects"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Projects
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:hidden sm:hidden md:hidden"
            id="pageButton"
            href="/contact"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px]">
              CONTACT
            </b>
          </Link>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/about#experience"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Experiences
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] xs:w-full border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:flex sm:flex sm:flex-1 md:flex md:flex-1"
            id="pageButton"
            href="/arts"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              ARTS
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:hidden sm:hidden md:hidden"
            id="pageButton"
            href="/arts"
          >
            <b className="self-stretch relative leading-[121.1%] flex items-end h-[35px] shrink-0 lg:text-[26px] md:text-[23px] sm:text-[20px]">
              ARTS
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/about#education"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Education
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] xs:w-full border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:flex sm:flex sm:flex-1 md:flex md:flex-1"
            id="pageButton"
            href="/model"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px] sm:text-[20px] xs:text-[18px]">
              MODEL
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/arts#projects"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Projects
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/about#resume"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Resume
            </div>
          </Link>
          <div className="self-stretch w-[284px] xs:w-full border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] cursor-pointer xs:flex sm:flex sm:flex-1 sm:cursor-auto md:flex md:flex-1 md:cursor-auto">
            <div className="flex items-center py-0 pl-[7px] pr-0 gap-5">
              <button
                className="cursor-pointer [border:none] p-0 w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px] sm:w-[20px] sm:h-[19px] xs:w-[18px] xs:h-[17px]"
                style={{ backgroundImage: "url('/LinkedInLogo.png')" }}
                id="socialsButton"
                onClick={onLinkedInLogoClick}
              />
              <button
                className="cursor-pointer [border:none] p-0 w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px] sm:w-[20px] sm:h-[19px] xs:w-[18px] xs:h-[17px]"
                style={{ backgroundImage: "url('/GithubLogo.png')" }}
                id="socialsButton"
                onClick={onGithubLogoClick}
              />
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] xs:hidden sm:hidden md:hidden"
            id="sectionButton"
            href="/arts#design-stack"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Design Stack
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch w-[284px] xs:w-full border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] cursor-pointer xs:flex sm:flex sm:flex-1 sm:cursor-auto md:flex md:flex-1 md:cursor-auto">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-xl [text-decoration:underline] leading-[121.1%] font-light text-[#fff] text-left inline-block lg:text-[17px] md:text-sm sm:text-[15px] xs:text-[14px]"
              id="socialsButton"
              onClick={onMakeMyInboxClick}
            >
              Make my inbox a happy place!
            </button>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] xs:hidden sm:hidden md:hidden"
            id="pageButton"
            href="/model"
          >
            <b className="self-stretch relative leading-[121.1%] md:text-[23px] sm:text-[20px]">
              MODEL
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
      </div>
    </div>
  );
};

FooterHomeAboutContact.propTypes = {
  className: PropTypes.string,
};

export default FooterHomeAboutContact;
