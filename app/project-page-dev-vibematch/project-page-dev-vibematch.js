'use client';
import dynamic from "next/dynamic";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevVibematch = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[120px] xs:gap-[100px] bg-black text-left text-[45px] text-[#fff] md:box-border">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <div className="relative z-10 self-stretch">
          <PageHeader currentPage="dev" borderColor="#fff" isProjectPage={true} />
        </div>
      <div className="relative z-10 self-stretch flex flex-col items-end gap-32 xs:gap-[60px] text-[25px] font-courier">
        <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[14px] sm:text-[9px] xs:text-[7px]">
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████               `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██                  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██                  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                        `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                        `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██████  ███████ ███    ███  █████  ████████  ██████ ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██   ██ ██      ████  ████ ██   ██    ██    ██      ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██████  █████   ██ ████ ██ ███████    ██    ██      ███████ `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██  ██  ██ ██   ██ ██      ██  ██  ██ ██   ██    ██    ██      ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`  ████   ██ ██████  ███████ ██      ██ ██   ██    ██     ██████ ██   ██ `}</p>
        </div>
        <div className="self-stretch w-full max-w-[1000px] mx-auto my-8">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/0nxLMw0ac0Y?vq=hd1080&autoplay=0&rel=0"
              title="VibeMatch Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            We started this project with a friend during the hackathon organized
            by Cline and Cerebras. Originally the idea was to enable better
            connection between content creators and sponsors. Indeed, majority
            of the connection is made through emails or business calls, with no
            centralization system, either for content creators or sponsors.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We used the usual web dev stack I use in most of my projects: React
            and Tailwind CSS. We also used Vite. What was the most challenging
            (and still is because it isn’t finished) is probably socials
            integrations. Social media like Instagram are incredibly restrictive
            when it comes to scrapping their data, and if you want to scarp more
            than one Instagram profile per hour you need a Meta authorization.
            This remains to do in our project, for the moment.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            It could have stayed as a hackathon project but we saw an
            opportunity of doing something really interesting, notably by its
            market area positioning (influence market, which is worth billions).
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ Check VibeMatch `}
            <a href="https://vibematch.tech/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the creative side of our project `}
            <Link href="/project-page-arts-vibematch" className="[text-decoration:underline]">
              here
            </Link>.
          </p>
        </b>
      </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageDevVibematch;
