import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Model = () => {
  return (
    <>
      <StickyNavigation currentPage="model" />
      <div className="model-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[123px] xs:gap-[100px] text-left text-[45px] text-[#fff] md:box-border">
        <PageHeader currentPage="model" borderColor="#fff" />
        <div className="self-stretch flex items-start gap-14 text-[150px] lg:min-h-[500px] md:min-h-[300px] sm:flex-col xs:flex-col xs:text-[70px]">
          <div className="self-stretch relative leading-[92%] inline-block shrink-0 max-w-[426px] lg:text-[120px] lg:h-auto lg:max-w-[350px] md:text-[100px] sm:text-[100px] sm:w-full">
            <span className="font-space-grotesk font-medium">{`IN FRONT OF `}</span>
            <b>THE</b>
            <span className="font-space-grotesk font-medium"> LENS.</span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end gap-[61px] xs:gap-[30px] text-[100px] md:gap-5" id="shootings">
          <div className="self-stretch relative text-[130px] leading-[121.1%] font-space-grotesk font-medium text-right lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[40px] md:h-auto">
            SHOOTINGS:
          </div>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default Model;
