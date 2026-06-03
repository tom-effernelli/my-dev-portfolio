'use client';
import dynamic from "next/dynamic";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevThisPortfolio = () => {
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
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████              `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██           `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██                 `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██           `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██                 `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`████████ ██   ██ ██ ███████                                            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██ ██                                                 `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ███████ ██ ███████                                            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██      ██                                            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██ ███████                                            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████   ██████  ██████  ████████ ███████  ██████  ██      ██  ██████  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██    ██ ██   ██    ██    ██      ██    ██ ██      ██ ██    ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██    ██ ██████     ██    █████   ██    ██ ██      ██ ██    ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██    ██ ██   ██    ██    ██      ██    ██ ██      ██ ██    ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██       ██████  ██   ██    ██    ██       ██████  ███████ ██  ██████  `}</p>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[10px]">
          <p className="m-0">
            I started this project by the beginning of my summer vacations,
            after my first year in engineering school. First I relearned
            Javascript, as I learned it when I was a kid but had forgotten all
            core concepts. Then I moved on to learning React and finally
            Next.js.
          </p>
          <p className="m-0">
            This took me quite some time as I spent two third of my summer
            vacations doing this. It was fun.
          </p>
          <p className="m-0">
            When I was sure I had the basics, I moved on prototyping the website
            with Figma, which took me around two or three weeks.
          </p>
          <p className="m-0">
            Finally I coded each page and deployed it on Vercel.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ See source code `}
            <a href="https://github.com/tom-effernelli/my-portfolio" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ You can also explore the creative side `}
            <Link href="/project-page-arts-this-portfolio" className="[text-decoration:underline]">
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

export default ProjectPageDevThisPortfolio;
