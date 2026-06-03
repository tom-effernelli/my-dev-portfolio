'use client';
import dynamic from "next/dynamic";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import ProjectDevLink from "../../components/project-dev-link";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const Dev = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[183px] xs:gap-[100px] bg-black text-left text-[45px] text-[#fff] lg:gap-[140px] md:gap-[100px] sm:gap-[70px] md:box-border">
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
          <PageHeader currentPage="dev" borderColor="#fff" />
        </div>
        <div className="relative z-10 self-stretch flex flex-col items-start gap-[88px] xs:gap-[30px] text-xl font-courier" id="tech-stack">
          <div className="self-stretch relative leading-[121.1%] lg:text-[15px] md:text-[10px] sm:text-[9px] xs:text-[6px]">
            <p className="m-0 whitespace-pre-wrap">{`████████ ███████  ██████ ██   ██     ███████ ████████  █████   ██████ ██   ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██      ██      ██   ██     ██         ██    ██   ██ ██      ██  ██  `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    █████   ██      ███████     ███████    ██    ███████ ██      █████   `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██      ██      ██   ██          ██    ██    ██   ██ ██      ██  ██  `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ███████  ██████ ██   ██     ███████    ██    ██   ██  ██████ ██   ██ `}</p>
          </div>
          <div className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px] font-bold">
            <p className="m-0">
              I'm mainly a frontend web developer, although I also work on
              projects outside web development (such as video game development).
              My focus is on building modern, responsive web applications, while
              keeping an eye on performance and clean design.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Tech Stack:
            </p>
            <p className="m-0">
              - Programming Languages: C, C# (+ Unity), Python, JavaScript, HTML,
              CSS
            </p>
            <p className="m-0">
              - Frameworks and Libraries: Next.js, React, Tailwind CSS
            </p>
            <p className="m-0">- Methods and Tools: Git, Responsive Design</p>
          </div>
        </div>
        <div className="relative z-10 self-stretch flex flex-col items-center py-0 pl-[170px] xs:pl-[0px] pr-0 gap-[63px] xs:gap-[30px] text-right text-[32px] md:pl-[130px] md:box-border sm:pl-[66px] sm:box-border font-courier" id="projects">
          <div className="self-stretch relative text-xl leading-[121.1%] lg:text-[15px] md:text-[10px] sm:text-[9px] xs:text-[6px]">
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██    ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ `}</p>
          </div>
          <ProjectDevLink
            title="→ Stochastic Texture Generator"
            description="A texture generator that can tile a given texture sample across arbitrarily large 3D surfaces without visible repetition patterns. Implementation based on the research paper 'Procedural Stochastic Textures by Tiling and Blending' by Deliot and Heitz."
            href="/project-page-dev-stochastic-texture"
          />
          <ProjectDevLink
            title="→ small-LLM: Transformer from scratch"
            description="An educational LLM project where I reimplemented the Transformer architecture from the 'Attention is All You Need' paper, including multi-head self-attention, positional encodings, and a full training pipeline. The LLM is trained on a dataset containing all Shakespeare's writings."
            href="/project-page-dev-small-llm"
          />
          <ProjectDevLink
            title="→ My Portfolio"
            description="A web portfolio built to better highlight my work. This project marked a significant step forward in my comprehension of JavaScript, React, and Next.js."
            href="/project-page-dev-this-portfolio"
          />
          <ProjectDevLink
            title="→ VibeMatch: Hackathon Winning Project"
            description="VibeMatch is a platform designed to improve connection between content creators and sponsors. Built in 1 week using NLP, AI matching and social media API integration."
            href="/project-page-dev-vibematch"
          />
          <ProjectDevLink
            title="→ The Sound of Silence: 2nd Position GameJam Project"
            description="A 2D video game where you explore a mansion and try not to go insane. Developed in one week using Phaser.js, a framework for browser-based game creation."
            href="/project-page-dev-t-s-o-s"
          />
          <ProjectDevLink
            title="→ CareSync: Hackathon top5 Winning Project"
            description="A project built to improve medical healthcare systems, making hospital patient sorting more efficient. Focused on priority handling and automation, coded with Claude API calls."
            href="/project-page-dev-caresync"
          />
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default Dev;
