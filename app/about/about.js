"use client";
import { useCallback } from "react";
import Image from "next/image";
import FooterHomeAboutContact from "../../components/footer-home-about-contact";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const About = () => {
  const onEmailMeClick = useCallback(() => {
    window.location.href =
      "mailto:tom.effernelli@gmail.com?subject=Hello there!";
  }, []);

  const onResumeClick = useCallback(() => {
    // Download CV from CDN
    const cvUrl = 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766936346/tom_effernelli_resume_okexhh.pdf'; // Remplacez par votre URL CDN
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'tom_effernelli_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <StickyNavigation currentPage="about" />
      <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[140px] xs:gap-[100px] text-left text-[110px] text-[#000] md:gap-[100px] md:box-border">
        <PageHeader currentPage="about" borderColor="#000" />
        <div className="self-stretch flex items-center text-right">
          <div className="flex-1 flex flex-col items-center sm:w-[200px] xs:hidden">
            <Image
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain sm:w-[200px] sm:h-[200px] sm:max-h-[350px] lg:max-h-[400px] xs:hidden"
              width={638}
              height={517.7}
              sizes="100vw"
              alt=""
              src="/unblurred-Chrome-star@2x.png"
            />
            <Image
              className="w-48 relative max-h-full object-contain sm:max-h-[100px] md:max-h-[150px] lg:max-h-[200px] xs:hidden"
              width={192}
              height={267}
              sizes="100vw"
              alt=""
              src="/unblurred-Chrome-little-star@2x.png"
            />
          </div>
          <div className="flex-[0.9687] border-[#000] border-dashed border-r-[2px] flex flex-col items-end py-0 pl-0 pr-[18px] gap-[33px] xs:pl-[50px]" id="who-am-i">
            <div className="w-full flex flex-col items-start max-w-[568px]">
              <div className="w-full relative leading-[121.1%] font-medium inline-block max-w-[568px] lg:text-[80px] md:text-[70px] sm:text-[50px] xs:text-[40px] font-space-grotesk">
                WHO AM I?
              </div>
              <div className="self-stretch relative border-[#000] border-dashed border-t-[2px] box-border h-[11px] overflow-hidden shrink-0" />
            </div>
            <div className="self-stretch relative text-3xl lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
              <p className="m-0">
                <span className="leading-[180%]">
                  I study computer science engineering at Télécom Paris
                  (Polytechnic Institute of Paris), simultaneously completing
                  a B.Sc. in mathematics at Sorbonne Université.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
                <span className="leading-[180%]">
                  Most of my work lives on the frontend — I build interfaces
                  in React and Next.js, with Tailwind CSS for styling. I’m
                  comfortable reaching into the backend when needed. You can
                  find all my projects in the DEV section.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
                <span className="leading-[180%]">
                  Graphic design is the other half of how I think. I use
                  Figma and the Adobe suite to bring ideas to life visually.
                  I believe code and design are the same discipline approached
                  from different angles — you can find my creative work in ARTS.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
                <span className="leading-[180%]">
                  I also model. I’m drawn to it for the same reasons I’m drawn
                  to design — presence, composition, intention. You can find my
                  shoots in the MODEL section.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
              </p>
              <p className="m-0">
                <span className="leading-[180%]">{`I’m open to new opportunities — `}</span>
                <span className="leading-[180%]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] [text-decoration:underline] text-[inherit] text-left inline-block"
                    onClick={onEmailMeClick}
                  >
                    let’s talk
                  </button>.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex items-start justify-between gap-0" id="experience">
          <div className="flex-1 flex flex-col items-start gap-[27px]">
            <div className="self-stretch relative font-medium lg:text-[80px] md:text-[70px] sm:text-[50px] xs:text-[40px] font-space-grotesk">
              EXPERIENCE
            </div>
            <div className="self-stretch flex flex-col items-start relative gap-14 text-3xl">
              <div className="self-stretch flex flex-col items-start gap-[19px] z-[0]">
                <div className="flex items-center gap-[19px]">
                  <div className="w-[27px] md:w-[22px] sm:w-[18px] xs:w-[18px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px] md:h-[22px] sm:h-[18px] xs:h-[18px] shrink-0" />
                  <div className="relative font-semibold lg:text-3xl md:text-[25px] sm:text-xl xs:text-[20px]">{`CTO & Co-Founder of VibeMatch`}</div>
                </div>
                <div className="self-stretch flex items-center py-0 pl-[50px] pr-0 text-[25px]">
                  <div className="flex-1 relative md:text-xl sm:text-[15px] xs:text-[15px]">
                    <p className="m-0">
                      Developing a B2B SaaS platform to connect content creators and sponsors.
                    </p>
                    <p className="m-0"> - Co-Founder</p>
                    <p className="m-0"> - Frontend development</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-2 z-[1]">
                <div className="self-stretch flex items-center gap-[19px]">
                  <div className="w-[27px] md:w-[22px] sm:w-[18px] xs:w-[18px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px] md:h-[22px] sm:h-[18px] xs:h-[18px] shrink-0" />
                  <div className="relative font-semibold md:text-[25px] sm:text-xl xs:text-[20px]">{`Hackathons & GameJams`}</div>
                </div>
                <div className="self-stretch flex flex-col items-start py-0 pl-[50px] pr-0 pt-[20px]">
                  <table className="w-full border-collapse border border-black">
                    <tbody>
                      <tr>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Event</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Project Repo</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">App</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Prize</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Sorbonne Université GameJam</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://github.com/tom-effernelli/gamejam-psu-the-sound-of-silence" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          The Sound of Silence
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://gamejam-psu-the-sound-of-silence.vercel.app/ " target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          Try it here!
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">2nd position</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Manus Hackathon</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://github.com/tom-effernelli/hackathon-manus-virtual-theremin" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          Virtual Theremine
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://hackathon-manus-virtual-theremin.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          Try it here!
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">-</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Shipfast Hackathon (@ Ecole 42, featuring Lovable, Anthropic, Cerebras, Windsurf)</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://github.com/tom-effernelli/hackathon-shipfast-caresync" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          CareSync
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://hackathon-shipfast-caresync.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          Try it here!
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Finalists (top-5)</td>
                      </tr>
                      <tr>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">VibeMatch</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">Private repo</td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">
                        <a href="https://vibematch.tech/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                          Try it here!
                        </a>
                        </td>
                        <td className="border border-black p-2 text-center text-sm xs:text-[10px]">top-5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-[3px] absolute !!m-[0 important] top-[-26.5px] left-[13.5px] md:left-[12.5px] sm:left-[11.5px] bg-[#000] border-[#000] border-solid border-r-[3px] box-border h-[1824px] z-[2]" />
            </div>
          </div>
          <Image
            className="flex-1 relative max-h-[331px] object-contain pl-[20px] lg:max-w-[286px] md:max-w-[250px] sm:max-w-[130px] xs:hidden"
            width={379}
            height={331}
            sizes="100vw"
            alt=""
            src="/unblurred-Chrome-lunatic-star-1@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex items-center justify-between relative gap-0 text-right" id="education">
          <Image
            className="flex-1 relative max-w-[333px] overflow-hidden max-h-[325px] object-contain z-[0] shrink-0 md:max-h-[250px] sm:max-h-[130px] xs:hidden"
            width={333}
            height={325}
            sizes="100vw"
            alt=""
            src="/unblurred-three-chrome-stars-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start gap-[27px] z-[1] shrink-0">
            <div className="self-stretch relative font-medium lg:text-[80px] md:text-[70px] sm:text-[50px] xs:text-[40px] font-space-grotesk">
              EDUCATION
            </div>
            <div className="self-stretch flex flex-col items-start gap-14 text-3xl">
              <div className="self-stretch flex flex-col items-end gap-[19px]">
                <div className="flex items-center justify-end gap-[19px] md:gap-[19px] md:items-center md:justify-end">
                  <div className="w-[501px] relative font-semibold flex items-center h-9 shrink-0 lg:text-3xl w-auto md:text-[25px] md:w-auto sm:text-[20px] xs:text-[20px] [align-self:unset]">
                    Grande Ecole Engineering Diploma
                  </div>
                  <div className="w-[27px] md:w-[22px] sm:w-[18px] xs:w-[18px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px] md:h-[22px] sm:h-[18px] xs:h-[18px] shrink-0" />
                </div>
                <div className="self-stretch flex items-center justify-end py-0 pl-0 pr-[50px] text-[25px]">
                  <div className="flex-1 relative lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Télécom Paris | Polytechnic Institute of Paris
                    </p>
                    <p className="m-0">
                      <i>2024 - 2027 - Palaiseau, France</i>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      One of France’s most prestigious general engineering schools
                      in the Grandes Ecoles system. Equivalent to a top-tier
                      university specialized in engineering studies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end gap-2 text-left">
                <div className="self-stretch flex items-center justify-end gap-[19px]">
                  <div className="relative font-semibold lg:text-3xl md:text-[25px] sm:text-xl xs:text-[20px]">
                    B.Sc. in Mathematics
                  </div>
                  <div className="w-[27px] md:w-[22px] sm:w-[18px] xs:w-[18px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px] md:h-[22px] sm:h-[18px] xs:h-[18px] shrink-0" />
                </div>
                <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[50px] text-right text-[25px]">
                  <div className="self-stretch relative lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">Sorbonne Université</p>
                    <p className="m-0">
                      <i>2025 - 2026 - Paris, France</i>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Prestigious French university degree covering core areas of
                      pure and applied mathematics, including analysis, algebra,
                      probability, and statistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end gap-2">
                <div className="self-stretch flex items-center justify-end gap-[19px]">
                  <div className="relative font-semibold lg:text-3xl lg:max-w-[800px] md:text-[25px] sm:text-xl xs:text-[20px]">
                    <p className="m-0">Preparatory Classes in Mathematics,</p>
                    <p className="m-0">Physics and Computer Sciences</p>
                  </div>
                  <div className="w-[27px] md:w-[22px] sm:w-[18px] xs:w-[18px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px] md:h-[22px] sm:h-[18px] xs:h-[18px] shrink-0" />
                </div>
                <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[50px] text-[25px]">
                  <div className="self-stretch relative lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
                    <p className="m-0">
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>Lycée du Parc</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <i>2022 - 2024 - Lyon, France</i>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          Post-secondary top-tier preparation program for the
                          competitive entrance examinations to French Engineering
                          Schools in the Grandes Ecoles system.
                        </span>
                      </span>
                    </p>
                    <p className="m-0 text-xl">
                      <i>
                        <span className="leading-[10px]">&nbsp;</span>
                      </i>
                    </p>
                    <p className="m-0">
                      <i>
                        *If you’re not familiar with the French academic system,
                        you might not know what it is - but trust me, it’s among
                        the most challenging programs you can pursue in France.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[3px] absolute !!m-[0 important] top-[110px] md:top-[100px] sm:top-[80px] xs:top-[60px] right-[13.5px] md:right-[12.5px] sm:right-[11.5px] xs:right-[10.5px] bg-[#000] border-[#000] border-solid border-r-[3px] box-border h-[1917px] md:h-[1500px] sm:h-[1200px] xs:h-[1000px] z-[2] shrink-0" />
        </div>
        <div className="self-stretch flex items-center p-2.5 lg:text-[27px] md:text-[24px] sm:text-[20px] xs:text-[15px]" id="resume">
          <div className="relative font-semibold">
            {`You can find my complete resume `}
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] [text-decoration:underline] text-[inherit] text-left inline-block"
              onClick={onResumeClick}
            >
              here.
            </button>
          </div>
        </div>
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default About;
