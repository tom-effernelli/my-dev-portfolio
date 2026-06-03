'use client';
import dynamic from "next/dynamic";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevTSOS = () => {
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
        <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[14px] sm:text-[9px] xs:text-[6px]">
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████                 `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██              `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██                    `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██              `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██                    `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`████████ ██   ██ ███████     ███████  ██████  ██    ██ ███    ██ ██████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██          ██      ██    ██ ██    ██ ████   ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ███████ █████       ███████ ██    ██ ██    ██ ██ ██  ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██               ██ ██    ██ ██    ██ ██  ██ ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ███████     ███████  ██████   ██████  ██   ████ ██████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████  ███████     ███████ ██ ██      ███████ ███    ██  ██████ ███████ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██          ██      ██ ██      ██      ████   ██ ██      ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ █████       ███████ ██ ██      █████   ██ ██  ██ ██      █████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██               ██ ██ ██      ██      ██  ██ ██ ██      ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████  ██          ███████ ██ ███████ ███████ ██   ████  ██████ ███████ `}</p>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            We built this project during a GameJam, with the idea of creating a
            game where you interact not with your keyboard or mouse, but with
            your voice. Technically, I used Phaser 3 as the core game engine and
            wrapped it inside a Next.js app to benefit from a smoother front-end
            setup and better control of the UI. The game reacts to audio input,
            so part of the focus was also on integrating microphone access and
            building the logic that translates voice intensity into game
            actions. The project isn't fully finished, but it was a great
            opportunity to explore a hybrid stack and real-time audio
            interaction in the browser.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ Check The Sound of Silence `}
            <a href="https://gamejam-psu-the-sound-of-silence.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the repo `}
            <a href="https://github.com/tom-effernelli/gamejam-psu-the-sound-of-silence" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the creative side of the game `}
            <Link href="/project-page-arts-t-s-o-s" className="[text-decoration:underline]">
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

export default ProjectPageDevTSOS;
