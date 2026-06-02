import FooterModel from "../../components/footer-model";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const shooting1 = [
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442254/A7400458_-_P_bu3j6l.jpg", alt: "Shooting 01 — photo 1" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442253/A7400519_-_P_pizn6n.jpg", alt: "Shooting 01 — photo 2" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442253/A7400326_-_P_l66zkz.jpg", alt: "Shooting 01 — photo 3" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442253/A7400837_-_P_kudkcj.jpg", alt: "Shooting 01 — photo 4" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442252/A7400522_-_P_bpbvbr.jpg", alt: "Shooting 01 — photo 5" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442252/A7400628_-_P_hb6go8.jpg", alt: "Shooting 01 — photo 6" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442252/A7400722_-_P_i1kr2u.jpg", alt: "Shooting 01 — photo 7" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442252/A7400626_-_P_jjhdap.jpg", alt: "Shooting 01 — photo 8" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442252/A7400515_-_P_enjn1p.jpg", alt: "Shooting 01 — photo 9" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780442251/A7400471_-_P_dwdcsh.jpg", alt: "Shooting 01 — photo 10" },
];

const shooting2 = [
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444251/A7400042_-_P_y2qkv5.jpg", alt: "Shooting 02 — photo 1" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444253/A7400043_-_P_gvna5s.jpg", alt: "Shooting 02 — photo 2" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444249/A7400035_-_P_xushfl.jpg", alt: "Shooting 02 — photo 3" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444250/A7400036_-_P_jy9kpi.jpg", alt: "Shooting 02 — photo 4" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444257/A7400074_-_P_jaiity.jpg", alt: "Shooting 02 — photo 5" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444261/A7400123_-_P_dzt4hl.jpg", alt: "Shooting 02 — photo 6" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444258/A7400080_-_P_-_Cinema_ifanny.jpg", alt: "Shooting 02 — photo 7" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444260/A7400095_-_P_-_Cinema_d6evbn.jpg", alt: "Shooting 02 — photo 8" },
  { type: "image", src: "https://res.cloudinary.com/dixdfunwk/image/upload/v1780444255/A7400072_-_P_-_Cinema_yj8wtk.jpg", alt: "Shooting 02 — photo 9" },
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
            <MediaCarousel mediaItems={shooting1} buttonBgColor="#b2dafa" zipName="shooting-01" />
          </div>
          <div className="self-stretch flex flex-col gap-5">
            <div className="self-stretch font-space-grotesk font-medium text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] xs:text-[18px] border-b-[2px] border-[#000] pb-3">
              SHOOTING 02
            </div>
            <MediaCarousel mediaItems={shooting2} buttonBgColor="#b2dafa" zipName="shooting-02" />
          </div>
        </div>
      </div>
      <FooterModel />
    </>
  );
};

export default Model;
