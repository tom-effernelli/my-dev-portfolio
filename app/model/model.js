import FooterModel from "../../components/footer-model";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const shooting1 = [
  { type: "image", src: "/og-image.png", alt: "Shooting 01 — photo 1" },
  { type: "image", src: "/og-image.png", alt: "Shooting 01 — photo 2" },
  { type: "image", src: "/og-image.png", alt: "Shooting 01 — photo 3" },
];

const shooting2 = [
  { type: "image", src: "/og-image.png", alt: "Shooting 02 — photo 1" },
  { type: "image", src: "/og-image.png", alt: "Shooting 02 — photo 2" },
  { type: "image", src: "/og-image.png", alt: "Shooting 02 — photo 3" },
];

const Model = () => {
  return (
    <>
      <StickyNavigation currentPage="model" />
      <div className="model-page w-full relative bg-[#b2dafa] overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[123px] xs:gap-[100px] text-left text-[45px] text-[#000] md:box-border">
        <PageHeader currentPage="model" borderColor="#000" />
        <div className="self-stretch flex items-start gap-14 text-[150px] lg:min-h-[500px] md:min-h-[300px] sm:flex-col xs:flex-col xs:text-[70px]">
          <div className="self-stretch relative leading-[92%] inline-block shrink-0 max-w-[426px] lg:text-[120px] lg:h-auto lg:max-w-[350px] md:text-[100px] sm:text-[100px] sm:w-full">
            <span className="font-space-grotesk font-medium">{`IN FRONT OF `}</span>
            <b>THE</b>
            <span className="font-space-grotesk font-medium"> LENS.</span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[80px] xs:gap-[50px] md:gap-[60px]" id="shootings">
          <div className="self-stretch relative text-[130px] leading-[121.1%] font-space-grotesk font-medium text-right lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[40px]">
            SHOOTINGS:
          </div>
          <div className="self-stretch flex flex-col gap-5">
            <div className="self-stretch font-space-grotesk font-medium text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] xs:text-[18px] border-b-[2px] border-[#000] pb-3">
              SHOOTING 01
            </div>
            <MediaCarousel mediaItems={shooting1} buttonBgColor="#b2dafa" />
          </div>
          <div className="self-stretch flex flex-col gap-5">
            <div className="self-stretch font-space-grotesk font-medium text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] xs:text-[18px] border-b-[2px] border-[#000] pb-3">
              SHOOTING 02
            </div>
            <MediaCarousel mediaItems={shooting2} buttonBgColor="#b2dafa" />
          </div>
        </div>
      </div>
      <FooterModel />
    </>
  );
};

export default Model;
