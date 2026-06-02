import Image from "next/image";
import FooterHomeAboutContact from "../components/footer-home-about-contact";
import StickyNavigation from "../components/sticky-navigation";
import PageHeader from "../components/page-header";

const Home = () => {
  return (
    <>
      <StickyNavigation currentPage="home" />
      <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-0 box-border gap-[60px] text-left text-[45px] text-[#000]">
        <PageHeader currentPage="home" borderColor="#000" />
        <div className="w-[1084px] absolute !!m-[0 important] top-[0px] left-[23px] h-[5000px] pointer-events-none xs:hidden">
          <div className="absolute top-[-1.5px] left-[32.5px] border-[#000] border-dashed border-r-[3px] box-border w-[3px] h-[5003px]" />
          <div className="absolute lg:top-[830.5px] md:top-[830.5px] sm:top-[630px] left-[32.5px] border-[#ed1c24] border-solid border-r-[3px] box-border w-[3px] h-[781px]" />
          <div className="absolute sm:top-[1000px] md:top-[1350px] lg:top-[1450px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute sm:top-[676px] md:top-[876px] lg:top-[976px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute sm:top-[845px] md:top-[1291.5px] lg:top-[1391.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[450px] md:w-[700px] lg:w-[949px] h-px lg:w-[700px]" />
          <div className="absolute sm:top-[870px] md:top-[1139.5px] lg:top-[1239.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[400px] md:w-[600px] lg:w-[758px] h-px lg:w-[550px]" />
          <div className="absolute sm:top-[960.5px] md:top-[1261.5px] lg:top-[1361.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[500px] md:w-[700px] lg:w-[949px] h-px lg:w-[700px]" />
          <div className="absolute sm:top-[936.5px] md:top-[1109.5px] lg:top-[1209.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[500px] md:w-[550px] lg:w-[729px] h-px lg:w-[500px]" />
          <div className="absolute sm:top-[1004px] md:top-[1353.5px] lg:top-[1453.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border sm:w-[450px] md:w-[700px] lg:w-[989px] h-[3px]" />
          <div className="absolute sm:top-[680px] md:top-[879.5px] lg:top-[979.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border sm:w-[200px] md:w-[200px] lg:w-[336px] h-[3px]" />
          <div className="absolute sm:top-[1004px] md:top-[1353.5px] lg:top-[1453.5px] sm:left-[450px] md:left-[700px] lg:left-[984.5px] border-[#000] border-dashed border-t-[3px] box-border w-[101px] h-[3px]" />
          <div className="absolute sm:top-[680px] md:top-[879.5px] lg:top-[979.5px] sm:left-[200px] md:left-[200px] lg:left-[343.5px] border-[#000] border-dashed border-t-[3px] box-border sm:w-[100px] md:w-[376px] lg:w-[376px] h-[3px]" />
          <Image
            className="absolute lg:top-[820px] md:top-[820px] sm:top-[620px] left-[24px] w-[21.2px] h-[21.2px] object-contain"
            width={21.2}
            height={21.2}
            sizes="100vw"
            alt=""
            src="/Group-16@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex items-start justify-between gap-0 z-[2]">
          <div className="flex flex-col items-start sm:gap-[145px] xs:gap-[70px] md:gap-[210px] lg:gap-[190px] shrink-0 lg:w-auto lg:[align-self:unset] md:pt-[40px] lg:pt-[50px] sm:pt-[60px] lg:box-border">
            <div className="relative tracking-[-0.01em] leading-[103%] font-space-grotesk font-medium lg:text-[140px] lg:w-auto lg:[align-self:unset] md:text-[110px] sm:text-[75px] xs:text-[52px]">
              <p className="m-0">DEVELOPER,</p>
              <p className="m-0">DESIGNER,</p>
              <p className="m-0">MODEL.</p>
            </div>
            <div className="self-stretch flex items-center justify-center text-5xl lg:pt-5 lg:box-border">
              <div className="flex-1 relative font-light md:text-[30px] lg:text-3xl lg:leading-[45px] lg:self-stretch lg:h-auto md:leading-[48px] sm:leading-[30px] sm:text-[25px] xs:text-[16px]">
                <p className="m-0">Hello, welcome to my website!</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Here you'll find info about me and</p>
                <p className="m-0">{`all the development & creative work I do.`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Feel free to take a look!</p>
              </div>
            </div>
          </div>
          <Image
            className="relative max-w-full overflow-hidden h-auto max-h-[2000px] object-cover min-w-[1122px] min-h-[950px] shrink-0 xs:hidden sm:hidden md:hidden"
            width={1122}
            height={950}
            sizes="100vw"
            alt=""
            src="/Arch-wrapped@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[74px] xs:pr-[37px] z-[1] text-[#000] md:box-border">
          <div className="self-stretch relative text-[35px] leading-[160%] font-light lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[16px]">
            <p className="m-0">This is a single space for three different worlds.</p>
            <p className="m-0">Code, design, and modeling — each with its own section,</p>
            <p className="m-0">each part of the same story.</p>
          </div>
        </div>
        <Image
          className="md:w-[357px] sm:w-[250px] xs:w-[300px] absolute !!m-[0 important] md:bottom-[270px] sm:bottom-[165px] xs:top-[275px] left-[-50px] max-h-full object-cover z-[0] lg:hidden"
          width={357}
          height={680}
          sizes="100vw"
          alt=""
          src="/Triangle-wrapped-pattern@2x.png"
        />
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default Home;
