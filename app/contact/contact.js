"use client";
import { useCallback } from "react";
import Image from "next/image";
import FooterHomeAboutContact from "../../components/footer-home-about-contact";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import TextType from "../../components/TextType"; // Note the uppercase 'T'

const Contact = () => {
  const onMakeMyInboxClick = useCallback(() => {
    window.location.href =
      "mailto:tom.effernelli@gmail.com?subject=Hello there!";
  }, []);

  const onLinkedInLogoVBLACKClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/tom-effernelli/");
  }, []);

  const onGithubLogoVBLACKClick = useCallback(() => {
    window.open("https://github.com/tom-effernelli");
  }, []);

  return (
    <>
      <StickyNavigation currentPage="contact" />
      <div className="contact-page w-full relative bg-[#fff3d9] overflow-hidden flex flex-col items-start pt-8 pb-[85px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[140px] text-left text-[45px] text-[#000] md:gap-[100px] md:box-border">
        <div className="self-stretch z-[1]">
          <PageHeader currentPage="contact" borderColor="#000" />
        </div>
        <div className="self-stretch flex items-center gap-[84px] z-[0] text-[125px] sm:flex-col sm:gap-[35px]">
          <Image
            className="w-[588px] relative h-[620px] object-cover lg:w-[400px] lg:h-[422px] md:w-[300px] md:h-[317px] xs:hidden sm:hidden sm:w-[300px] sm:h-[317px]"
            width={588}
            height={620}
            sizes="100vw"
            alt=""
            src="/writing-machine@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-0 lg:self-stretch lg:h-auto sm:flex-[unset] sm:self-stretch">
            <TextType
              as="div"
              text="Drop me a line."
              className="self-stretch relative leading-[130px] lg:text-[100px] lg:leading-[90px] md:text-[75px] md:leading-[75px] sm:text-[100px] sm:leading-[100px] xs:text-[80px] xs:leading-[80px] sm:text-left font-dm-serif-text font-bold uppercase"
              typingSpeed={100}
              pauseDuration={1600}
              showCursor={true}
              cursorCharacter="_"
              deletingSpeed={10}
              loop={false}
              startOnVisible={true}
            />
            <div className="self-stretch flex flex-col items-start pt-[50px] px-0 pb-0 gap-[9px] text-[28px] sm:pt-[50px] sm:box-border">
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-[28px] [text-decoration:underline] leading-[121.1%] text-[#000] text-left inline-block lg:text-xl md:text-[15px] sm:text-[20px] xs:text-[18px]"
                  id="socialsButton"
                  onClick={onMakeMyInboxClick}
                >
                  Make my inbox a happy place!
                </button>
              </div>
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <div className="self-stretch relative leading-[121.1%] lg:text-xl md:text-[15px] sm:text-[20px] xs:text-[18px]">
                  Also check my LinkedIn and Github:
                </div>
              </div>
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <div className="flex items-center py-0 pl-[5px] pr-0 gap-[25px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-[url('/LinkedInLogoVBLACK.png')] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-6 md:h-[23px] sm:w-[18px] sm:h-[17px] xs:w-[21px] xs:h-[20px]"
                    id="socialsButton"
                    onClick={onLinkedInLogoVBLACKClick}
                  />
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-[url('/GithubLogoVBLACK.png')] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-6 md:h-[23px] sm:w-[18px] sm:h-[17px] xs:w-[21px] xs:h-[20px]"
                    id="socialsButton"
                    onClick={onGithubLogoVBLACKClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default Contact;
