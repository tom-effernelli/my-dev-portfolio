'use client';
import dynamic from "next/dynamic";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const Dither = dynamic(() => import("../../components/Dither"), { ssr: false });

const ProjectPageDevSmallLLM = () => {
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
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████           `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██        `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██              `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██        `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██              `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████ ███    ███  █████  ██      ██      ██       ██       ███    ███ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ████  ████ ██   ██ ██      ██      ██       ██       ████  ████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████ ██ ████ ██ ███████ ██      ██      ██       ██       ██ ████ ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`     ██ ██  ██  ██ ██   ██ ██      ██      ██       ██       ██  ██  ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████ ██      ██ ██   ██ ███████ ███████ ████████ ████████ ██      ██ `}</p>
          </div>
          <div className="self-stretch w-full max-w-[800px] mx-auto my-8">
            <div className="relative w-full h-[600px] xs:h-[450px] overflow-hidden rounded-lg shadow-lg bg-[#050505]">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://tom-effernelli-small-llm.hf.space/"
                title="small-LLM Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
          <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
            <p className="m-0">
              This project is a small Large Language Model (LLM) that I built
              from scratch by implementing the Transformer architecture
              described in the &quot;Attention is All You Need&quot; research paper.
              The goal was to deeply understand every part of a modern
              sequence-to-sequence model: multi-head self-attention, positional
              encodings, layer normalization, residual connections, and the
              full encoder–decoder training loop. I trained this small model on
              a custom dataset built from the complete works of William
              Shakespeare so it could learn to generate text in an Elizabethan
              style.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              I implemented the model in code starting from a blank file:
              tokenization, embeddings, stacked attention blocks, feed-forward
              layers, and autoregressive decoding. I also wrote the full
              training pipeline: dataset preprocessing, batching, optimizer and
              learning rate scheduling, as well as evaluation and sampling
              utilities to generate text.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Beyond reproducing the architecture, I spent time profiling and
              optimizing performance, paying attention to tensor shapes,
              masking, and memory usage to make the model trainable on limited
              hardware. This project significantly strengthened my understanding
              of how modern LLMs work under the hood, from the math of attention
              to the practical engineering needed to train and serve them.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {`→ Check the repo `}
              <a
                href="https://github.com/tom-effernelli/small-LLM"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                here
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

export default ProjectPageDevSmallLLM;


