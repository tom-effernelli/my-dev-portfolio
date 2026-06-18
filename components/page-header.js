import Link from "next/link";
import Timestamp from "./timestamp";

const PageHeader = ({
  currentPage = "home",
  borderColor = "#000",
  isProjectPage = false
}) => {
  const isDark = borderColor === "#fff";
  const isYellow = borderColor === "#EB94C3";
  const textColorClass = isDark ? "text-[#fff]" : isYellow ? "text-[#EB94C3]" : "text-[#000]";
  const borderClass = isDark ? "border-[#fff]" : isYellow ? "border-[#EB94C3]" : "border-[#000]";

  const pages = [
    { name: "HOME", href: "/", key: "home" },
    { name: "ABOUT", href: "/about", key: "about" },
    { name: "DEV", href: "/dev", key: "dev" },
    { name: "ARTS", href: "/arts", key: "arts" },
    { name: "CONTACT", href: "/contact", key: "contact" },
  ];

  const isPageSelected = (pageKey) => {
    if (isProjectPage) {
      return false;
    }
    return pageKey === currentPage;
  };

  const shouldShowSymbolOnLink = (pageKey) => {
    if (isProjectPage) {
      if (pageKey === "dev" && (currentPage === "dev" || currentPage?.includes("dev"))) {
        return true;
      }
      if (pageKey === "arts" && (currentPage === "arts" || currentPage?.includes("arts"))) {
        return true;
      }
    }
    return false;
  };

  const renderNavRow = (page, index) => {
    const isSelected = isPageSelected(page.key);

    if (index === 0) {
      if (currentPage === "home") {
        return (
          <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px]`}>
              <b className={`self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <div className={`self-stretch relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
                <p className="m-0">Hello there,</p>
                <p className="m-0">Welcome on my personal website.</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <div className={`relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
                <p className="m-0">Got something in mind?</p>
                <p className="m-0">Reach out anytime!</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {page.name}
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <div className={`self-stretch relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
                <p className="m-0">Hello there,</p>
                <p className="m-0">Welcome on my personal website.</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <div className={`relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
                <p className="m-0">Got something in mind?</p>
                <p className="m-0">Reach out anytime!</p>
              </div>
            </div>
          </div>
        );
      }
    }

    if (index === 1) {
      return (
        <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
          {isSelected ? (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px]`}>
              <b className={`self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
          ) : (
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {page.name}
              </b>
            </Link>
          )}
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
            <div className={`relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
              <p className="m-0">Nice to meet you.</p>
              <p className="m-0">Feel free to take a look around!</p>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
            <div className={`relative leading-[121.1%] font-light lg:text-[15px] ${textColorClass}`}>
              <p className="m-0">Imagined in Paris. Built with intention.</p>
              <p className="m-0">Tom Effernelli © 2025.</p>
            </div>
          </div>
        </div>
      );
    }

    if (index === 2) {
      const showSymbolOnLink = shouldShowSymbolOnLink(page.key);

      if (isProjectPage && showSymbolOnLink && !isSelected) {
        return (
          <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end">
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <Timestamp className={`relative leading-[121.1%] font-light lg:text-[22px] ${textColorClass}`} />
            </div>
          </div>
        );
      }

      return (
        <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end">
          {isSelected ? (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px]`}>
              <b className={`self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
          ) : (
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {page.name}
              </b>
            </Link>
          )}
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          {(currentPage === "home" || currentPage === "about" || currentPage === "contact" || currentPage === "dev" || currentPage === "arts") && (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden`}>
              <Timestamp className={`relative leading-[121.1%] font-light lg:text-[22px] ${textColorClass}`} />
            </div>
          )}
        </div>
      );
    }

    if (index === 3) {
      const showSymbolOnLink = shouldShowSymbolOnLink(page.key);

      return (
        <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          {isSelected ? (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px]`}>
              <b className={`self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
          ) : (
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {showSymbolOnLink && (
                  <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span>
                )} {page.name}
              </b>
            </Link>
          )}
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
      );
    }

    if (index === 4) {
      const showSymbolOnLink = shouldShowSymbolOnLink(page.key);

      return (
        <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          {isSelected ? (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px]`}>
              <b className={`self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
          ) : (
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {showSymbolOnLink && (
                  <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span>
                )} {page.name}
              </b>
            </Link>
          )}
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
      );
    }

    if (index === 5) {
      return (
        <div key={page.key} className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          {isSelected ? (
            <div className={`self-stretch flex-1 ${borderClass} border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px]`}>
              <b className={`self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> {page.name}
              </b>
            </div>
          ) : (
            <Link
              className={`cursor-pointer [text-decoration:none] self-stretch flex-1 ${borderClass} border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]`}
              id="pageButton"
              href={page.href}
            >
              <b className={`self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px] xs:text-[22px] ${textColorClass}`}>
                {page.name}
              </b>
            </Link>
          )}
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
        </div>
      );
    }

    return null;
  };

  const getHeaderContainerClasses = () => {
    if ((currentPage === "arts" || currentPage?.includes("arts")) && isProjectPage) {
      return "self-stretch h-[382px] flex flex-col items-start py-0 pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[33px] sm:gap-[20px] z-[0] md:box-border";
    }
    if (currentPage === "arts" && !isProjectPage) {
      return "self-stretch flex flex-col items-start gap-[33px] sm:gap-[20px]";
    }
    if (currentPage === "home") {
      return "self-stretch flex flex-col items-start py-0 pl-0 pr-[74px] xs:pr-[37px] gap-[33px] sm:gap-[20px] z-[4] md:box-border";
    }
    if (currentPage === "about") {
      return "self-stretch flex flex-col items-start gap-[33px] sm:gap-[20px] text-[45px]";
    }
    return "self-stretch flex flex-col items-start gap-[33px] sm:gap-[20px]";
  };

  return (
    <div className={getHeaderContainerClasses()} id="header">
      <div className={`self-stretch ${borderClass} border-solid border-b-[2px] flex flex-col items-start justify-end`}>
        <b className={`self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px] xs:text-[25px] ${textColorClass}`}>
          TOM EFFERNELLI
        </b>
      </div>
      <div className="self-stretch h-[295px] sm:h-[230px] xs:h-[230px] flex flex-col items-start gap-2.5 sm:gap-1 xs:gap-1 text-[29px]">
        {pages.map((page, index) => renderNavRow(page, index))}
      </div>
    </div>
  );
};

export default PageHeader;
