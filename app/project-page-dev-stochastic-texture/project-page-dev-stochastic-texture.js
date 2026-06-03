'use client';
import dynamic from "next/dynamic";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import TextureComparisonCarousel from "../../components/texture-comparison-carousel";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevStochasticTexture = () => {
  // Données des couples texture originale / image générée
  const texturePairs = [
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752926/texture-1_pa2noe.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752825/output-1_jzvbov.jpg',
      altOriginal: 'Original texture 1',
      altGenerated: 'Generated image 1'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752947/texture-2_ipzxwv.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752942/output-2_gcdzja.jpg',
      altOriginal: 'Original texture 2',
      altGenerated: 'Generated image 2'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752872/texture-3_hty4ym.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752858/output-3_aggp7o.jpg',
      altOriginal: 'Original texture 3',
      altGenerated: 'Generated image 3'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752924/texture-4_mkhk2u.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752853/output-4_cqqkdh.jpg',
      altOriginal: 'Original texture 4',
      altGenerated: 'Generated image 4'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752931/texture-5_aigzdf.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752828/output-5_scsmft.jpg',
      altOriginal: 'Original texture 5',
      altGenerated: 'Generated image 5'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752934/texture-6_cjvn0l.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752823/output-6_vmuhad.jpg',
      altOriginal: 'Original texture 6',
      altGenerated: 'Generated image 6'
    },
    {
      original: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752938/texture-7_ltypn7.jpg',
      generated: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1766752821/output-7_e9vs8l.jpg',
      altOriginal: 'Original texture 7',
      altGenerated: 'Generated image 7'
    },
  ];

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
            <p className="m-0 whitespace-pre-wrap">{`████████ ███████ ██   ██ ████████ ██    ██ ██████  ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██       ██ ██     ██    ██    ██ ██   ██ ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    █████     ███      ██    ██    ██ ██████  █████   `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██       ██ ██     ██    ██    ██ ██   ██ ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ███████ ██   ██    ██     ██████  ██   ██ ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{` ██████  ███████ ███    ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██       ██      ████   ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ███ █████   ██ ██  ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██    ██ ██      ██  ██ ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{` ██████  ███████ ██   ████                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
          </div>
          
          {/* Carrousel d'images texture originale / image générée */}
          <TextureComparisonCarousel texturePairs={texturePairs} />
          
          <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
            <p className="m-0">
              This project implements a stochastic texture generator that can tile
              a given texture sample across arbitrarily large 3D surfaces without
              any visible repetition patterns. The implementation is based on the
              research paper &quot;Procedural Stochastic Textures by Tiling and
              Blending&quot; by Thomas Deliot and Eric Heitz, which introduces
              techniques for generating seamless, non-repetitive textures through
              histogram-preserving blending and stochastic tiling.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The core challenge addressed by this project is the problem of
              texture repetition artifacts that occur when tiling a small texture
              sample across large surfaces. Traditional tiling methods create
              visible seams and repeating patterns that break immersion in 3D
              environments. The stochastic texturing approach solves this by
              using histogram-preserving blending operations that maintain the
              statistical properties of the original texture while creating
              seamless transitions between tiles.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The implementation involves analyzing the input texture sample,
              generating multiple tile variations, and applying blending
              techniques that preserve the histogram distribution of pixel
              values. This ensures that the synthesized texture maintains the
              visual characteristics of the original sample while eliminating
              repetition artifacts. The algorithm can generate textures of
              arbitrary size, making it particularly useful for texturing large
              3D models and environments in computer graphics applications.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This implementation is written in Python, providing a clear and
              accessible codebase for understanding the algorithm. However, the
              original reference implementation by the authors is in C++, which
              offers approximately 70 times better performance. This performance
              advantage makes C++ implementations significantly more suitable
              for real-time texture generation in production graphics
              applications, where computational efficiency is critical.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              There are several areas where this implementation could be
              improved. Currently, each color channel (RGB) is processed
              independently during the histogram-preserving blending operations.
              While this approach simplifies the implementation, it breaks the
              correlations between color channels that exist in the original
              texture sample. This can result in subtle color artifacts in the
              final generated texture. A more sophisticated approach would
              process the color channels jointly, preserving these inter-channel
              correlations.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Additionally, working with compressed texture formats (such as
              DXT/BC formats commonly used in game engines) introduces
              additional challenges. These formats use block-based compression
              schemes that can interfere with the histogram-preserving blending
              operations, potentially introducing visual artifacts or requiring
              specialized handling to maintain quality. The original paper
              discusses modifications to the algorithm to accommodate these
              compressed formats, which would be a valuable extension to this
              implementation.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This project demonstrates my interest in advanced computer graphics
              techniques and my ability to implement research papers into
              practical applications. The work required understanding complex
              mathematical concepts related to texture synthesis, histogram
              preservation, and stochastic sampling methods.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {`→ Check the repo `}
              <a
                href="https://github.com/tom-effernelli/stochastic-procedural-texture-gen"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                here
              </a>
              .
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Reference: Deliot, T., &amp; Heitz, E. Procedural Stochastic
              Textures by Tiling and Blending.{" "}
              <em>GPU Zen 2</em>.{" "}
              <a
                href="https://eheitzresearch.wordpress.com/738-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                Link to paper
              </a>
              .
            </p>
          </b>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageDevStochasticTexture;

