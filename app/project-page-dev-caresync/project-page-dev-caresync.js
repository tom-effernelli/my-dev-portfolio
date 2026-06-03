'use client';
import dynamic from "next/dynamic";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevCaresync = () => {
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
        <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[15px] sm:text-[10px] xs:text-[7px]">
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██             `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██       `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██             `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                   `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████  █████  ██████  ███████ ███████ ██    ██ ███    ██  ██████ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██   ██ ██      ██       ██  ██  ████   ██ ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ███████ ██████  █████   ███████   ████   ██ ██  ██ ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██   ██ ██           ██    ██    ██  ██ ██ ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████ ██   ██ ██   ██ ███████ ███████    ██    ██   ████  ██████ `}</p>
        </div>
        <div className="self-stretch w-full max-w-[1000px] mx-auto my-8">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/RdFEQCJy8PI?vq=hd1080&autoplay=0&rel=0"
              title="CareSync Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            We built CareSync during the Shipfast hackathon organized at Ecole
            42. We wanted to make healthcare emergency department workflows
            smarter, faster, and more responsive using AI. We thus created an
            app that helped doctors fasten the patient priority sorting process.
            This sorting is actually made with the help of a long ten page paper
            grid (at least in France), and there are special nurses that are
            formed to set patient priority (they’re called the ‘triage nurses’).
            We thought this process could definitely be enhanced by a bit of
            computing and AI.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            The application hinges on a React frontend styled with Tailwind CSS
            and Shadcn/UI, backed by Supabase services (PostgreSQL).
          </p>
          <p className="m-0">
            On the AI side, we integrated Anthropic’s Claude API for
            natural-language-based patient check-in and triage support, used Web
            Speech API for voice interactions, and added image analysis
            capabilities for medical photos.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ Check CareSync `}
            <a href="https://hackathon-shipfast-caresync.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the repo `}
            <a href="https://github.com/tom-effernelli/hackathon-shipfast-caresync" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the creative side of the project `}
            <Link href="/project-page-arts-caresync" className="[text-decoration:underline]">
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

export default ProjectPageDevCaresync;
