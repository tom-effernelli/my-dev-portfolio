import Image from "next/image";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import ProjectLinkCard from "../../components/project-link-card";
import PageHeader from "../../components/page-header";

const Arts = () => {
  return (
    <>
      <StickyNavigation currentPage="arts" />
      <div className="arts-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[123px] xs:gap-[100px] text-left text-[45px] text-[#fff] md:box-border">
        <PageHeader currentPage="arts" borderColor="#fff" />
        <div className="self-stretch flex items-start gap-14 text-[150px] lg:min-h-[500px] md:min-h-[300px] sm:flex-col xs:flex-col xs:text-[70px]">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover lg:h-[500px] lg:max-h-[500px] md:self-stretch md:h-auto md:max-h-[350px] xs:max-h-[200px] sm:flex-[unset] sm:self-stretch"
            width={794}
            height={700}
            sizes="100vw"
            alt=""
            src="/First-decoration-image@2x.png"
          />
          <div className="self-stretch relative leading-[92%] inline-block shrink-0 max-w-[426px] lg:text-[120px] lg:h-auto lg:max-w-[350px] md:text-[100px] sm:text-[100px] sm:w-full">
            <span className="font-space-grotesk font-medium">{`LET THE ARTS `}</span>
            <b>IN</b>
            <span className="font-space-grotesk font-medium">.</span>
          </div>
        </div>
        <div className="self-stretch flex items-end justify-end text-right text-3xl lg:min-h-[500px] sm:flex-col xs:flex-col">
          <div className="flex flex-col items-end justify-end py-0 pl-0 pr-0 box-border gap-5 max-w-[730px] z-[1] lg:max-w-[500px] md:w-[400px] md:max-w-[400px] sm:w-[300px] sm:max-w-[300px]">
            <div className="self-stretch relative leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
              IN HERE YOU WILL FIND MY
            </div>
            <div className="self-stretch relative text-[300px] leading-[80%] font-space-grotesk font-medium text-left lg:text-[230px] lg:h-auto md:text-[150px] sm:text-[110px] xs:text-[90px]">
              ART
            </div>
            <div className="self-stretch relative text-[120px] leading-[121.1%] lg:text-[90px] md:text-[70px] sm:text-[50px] xs:text-[40px] font-space-grotesk">
              CREATIONS
            </div>
          </div>
          <Image
            className="self-stretch relative max-w-full overflow-hidden lg:max-h-[650px] md:max-h-[550px] sm:max-h-[720px] xs:max-h-[400px] object-contain object-right z-[0] sm:self-stretch"
            width={590}
            height={800}
            sizes="100vw"
            alt=""
            src="/Decorative-image-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end gap-[61px] xs:gap-[30px] text-[100px] md:gap-5" id="projects">
          <div className="self-stretch relative text-[130px] leading-[121.1%] font-space-grotesk font-medium text-right lg:text-[100px] md:text-[80px] sm:text-[70px] xs:text-[40px] md:h-auto">
            PROJECTS:
          </div>
          <ProjectLinkCard
            title="THIS PORTFOLIO"
            description="I spent all my summer on this project, which aims to better highlight my work. LinkedIn is just messy when it comes to showcase dev work, and not made at all to shocase design work. Super fun and creative to do!"
            href="/project-page-arts-this-portfolio"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761334364/my-portfolio-cover_yevglp.png"
            textColor="text-[#000]"
          />
          <ProjectLinkCard
            title="VIBEMATCH"
            subtitle="TOP5 WINNING HACKATHON PROJECT"
            description="VibeMatch is a plateform designed to improve connection between content creators and sponsors. Check out the promotion video I created for this occasion!"
            href="/project-page-arts-vibematch"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761331030/Top_project_1_-_fill_example_uiza2r.png"
          />
          <ProjectLinkCard
            title="T.S.O.S"
            subtitle="2ND POSITION GAMEJAM PROJECT"
            description="The Sound of Silence is a game where you explore a mansion, trying not to go insane. Creating the design was pretty fun and taught me a lot of things about tilemapping."
            href="/project-page-arts-t-s-o-s"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761331022/Project_2_image_-_fill_example_pwrtbb.png"
          />
          <ProjectLinkCard
            title="INSTAGRAM ACCOUNT - 2"
            description="This Instagram account I designed was for my engineering school, in order to help new students make their decision upon which school to choose, presenting all the benefits of mine..."
            href="/project-page-arts-instagram-account2"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761331025/Project_compte_admissible_cover_jlytvm.png"
            textColor="text-[#000]"
          />
          <ProjectLinkCard
            title="CARESYNC"
            subtitle="TOP5 WINNING HACKATHON PROJECT"
            description="A hackathon project to make medical healthcare systems such as hospitals more efficient, working on the patient priority sorting process. Check out the demo video!"
            href="/project-page-arts-caresync"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761331023/Project_caresync_cover_poqaqo.png"
          />
          <ProjectLinkCard
            title="INSTAGRAM ACCOUNT - 1"
            description="This Instagram account I designed with some other teammates too was created during the student board election campaign I took part in. I was in charge of all the communication processes."
            href="/project-page-arts-instagram-account1"
            backgroundImage="https://res.cloudinary.com/dixdfunwk/image/upload/v1761331027/Project_compte_insta_bediana_cover_ob4wsh.png"
            textColor="text-[#000]"
          />
        </div>
        <div className="self-stretch flex flex-col items-start gap-[39px] text-[90px]" id="design-stack">
          <div className="relative leading-[121.1%] font-space-grotesk font-medium lg:text-[80px] md:text-6xl sm:text-[45px] xs:text-[35px]">
            DESIGN STACK:
          </div>
          <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:text-[22px] sm:text-[17px] xs:text-[15px]">
            <p className="m-0">
              Here are the softwares I’m the most familiar with for graphic
              creations:
            </p>
            <ul className="m-0 font-[inherit] text-[length:inherit] pl-[47px] list-disc">
              <li className="mb-0">Adobe Photoshop</li>
              <li className="mb-0">Adobe Premiere Pro</li>
              <li className="mb-0">Adobe After Effects</li>
              <li className="mb-0">Adobe Illustrator</li>
              <li className="mb-0">Figma</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default Arts;
