"use client";

import { motion } from "motion/react";

const skills = [
  "React Native",
  "React",
  "TypeScript",
  "JavaScript",
  "Firebase",
  "Git",
];

const interests = [
  "Building products",
  "Learning how things work",
  "Problem solving",
  "Creative experiments",
];

export default function About() {
  return (
    <section id="about" className="about">

      {/* =================================
          INTRO
      ================================= */}

      <motion.div
        className="aboutIntro"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-120px",
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >

        <div className="aboutLabel">
          <span>02</span>
          <span>ABOUT</span>
        </div>

        <div className="aboutHeadline">
          <h2>
            I like making
            <br />
            things that
            <br />
            <span>feel useful.</span>
          </h2>
        </div>

      </motion.div>


      {/* =================================
          DESCRIPTION
      ================================= */}

      <div className="aboutDescription">

        <motion.div
          className="aboutStatement"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p>
            I&apos;m a software developer who enjoys
            turning ideas into real products.
          </p>

          <p>
            I like being involved in the whole process —
            figuring out the problem, building the solution,
            and obsessing over the little things that make
            something feel good to use.
          </p>

        </motion.div>


        {/* =================================
            SKILLS
        ================================= */}

        <motion.div
          className="aboutSkills"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >

          <p className="smallLabel">
            THINGS I WORK WITH
          </p>

          <div className="skillList">

            {skills.map((skill, index) => (

              <motion.div
                key={skill}
                className="skill"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{
                  x: 8,
                }}
              >

                <span className="skillIndex">
                  0{index + 1}
                </span>

                <span>
                  {skill}
                </span>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>


      {/* =================================
          LITTLE INTERLUDE
      ================================= */}

      <motion.div
        className="aboutInterlude"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <span className="interludeText">
          CURIOUS BY DEFAULT
        </span>

        <motion.div
          className="orbit"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>✦</span>
        </motion.div>

      </motion.div>


           {/* =================================
          PERSONAL SIDE / ART
      ================================= */}

      <section className="personalSide">

        {/* TEXT */}

        <motion.div
          className="personalHeading"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="smallLabel">
            WHEN I&apos;M NOT CODING
          </p>

          <h3>
            I&apos;m probably
            <br />
            making something
            <br />
            <span>else.</span>
          </h3>

        </motion.div>


        {/* TEXT + ART */}

        <div className="personalRight">

          <motion.div
            className="personalText"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <p>
              Painting is one of the ways I slow down,
              experiment, and make things just because
              I want to.
            </p>

            <p>
              It&apos;s a completely different kind of
              problem solving — and probably the reason
              I like adding a little creativity to the
              things I build.
            </p>

          </motion.div>


          {/* ============================
              ART STACK
          ============================= */}

          <div className="artStack">

            {/* PAINTING 1 */}

            <motion.div
              className="artPiece artOne"
              initial={{
                opacity: 0,
                y: 100,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -6,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                rotate: -1,
                scale: 1.03,
                }}
            >

              <img
                src="/images/Art/art_one.png"
                alt="Painting by Kavya"
              />

            </motion.div>


            {/* PAINTING 2 */}

            <motion.div
              className="artPiece artTwo"
              initial={{
                opacity: 0,
                y: 120,
                rotate: 7,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 4,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              whileHover={{
  y: -12,
  rotate: 4,
  scale: 1.03,
}}
            >

              <img
                src="/images/Art/art_two.png"
                alt="Painting by Kavya"
              />

            </motion.div>


            {/* PAINTING 3 */}

            <motion.div
              className="artPiece artThree"
              initial={{
                opacity: 0,
                y: 140,
                rotate: -3,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                rotate: 2,
                scale: 1.03,
              }}
            >

              <img
                src="/images/Art/art_three.png"
                alt="Painting by Kavya"
              />

            </motion.div>

          </div>

        </div>

      </section>


      {/* =================================
          CSS
      ================================= */}

      <style>{`

        /* ================================
           ABOUT
        ================================= */

        .about {
          padding:
            160px
            40px
            180px;

          background: #f5f2ea;
        }


        /* ================================
           INTRO
        ================================= */

        .aboutIntro {
          display: grid;

          grid-template-columns:
            0.25fr
            0.75fr;

          gap: 40px;
        }

        .aboutLabel {
          display: flex;

          gap: 18px;

          padding-top: 15px;

          font-size: 11px;
          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        .aboutLabel span:first-child {
          opacity: 0.5;
        }


        .aboutHeadline h2 {
          margin: 0;

          max-width: 1000px;

          font-size: clamp(
            70px,
            10vw,
            150px
          );

          line-height: 0.88;

          letter-spacing: -0.065em;

          font-weight: 600;
        }

        .aboutHeadline h2 span {
          opacity: 0.35;
        }


        /* ================================
           DESCRIPTION
        ================================= */

        .aboutDescription {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 120px;

          margin-top: 120px;

          padding-left: 25%;
        }

        .aboutStatement {
          max-width: 500px;
        }

        .aboutStatement p {
          margin: 0 0 25px;

          font-size: 18px;

          line-height: 1.55;
        }


        /* ================================
           SKILLS
        ================================= */

        .smallLabel {
          margin: 0 0 25px;

          font-size: 10px;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          opacity: 0.65;
        }

        .skillList {
          border-top:
            1px solid
            rgba(0,0,0,0.15);
        }

        .skill {
          display: flex;

          align-items: center;

          gap: 18px;

          padding: 12px 0;

          border-bottom:
            1px solid
            rgba(0,0,0,0.15);

          font-size: 14px;

          cursor: default;
        }

        .skillIndex {
          width: 25px;

          font-size: 9px;

          opacity: 0.45;
        }


        /* ================================
           INTERLUDE
        ================================= */

        .aboutInterlude {
          position: relative;

          display: flex;

          align-items: center;
          justify-content: center;

          height: 250px;

          margin:
            130px
            0;
        }

        .interludeText {
          position: relative;
          z-index: 2;

          font-size: 11px;

          letter-spacing: 0.16em;
        }

        .orbit {
          position: absolute;

          width: 140px;
          height: 140px;

          display: flex;

          align-items: flex-start;
          justify-content: center;

          border:
            1px solid
            rgba(0,0,0,0.18);

          border-radius: 50%;
        }

        .orbit span {
          transform:
            translateY(-8px);

          font-size: 16px;
        }


        /* ================================
           PERSONAL SIDE
        ================================= */

        .personalSide {
          display: grid;

          grid-template-columns:
          0.8fr 1.2fr;
          gap: 80px;
          padding-top: 40px;
           border-top:
            1px solid
            rgba(0,0,0,0.18);
        }

        .personalHeading h3 {
          margin: 0;

          font-size: clamp(
            60px,
            8vw,
            120px
          );

          line-height: 0.9;

          letter-spacing: -0.06em;

          font-weight: 600;
        }

        .personalHeading h3 span {
          opacity: 0.35;
        }

        .personalText {
          max-width: 400px;

          padding-top: 55px;
        }

        .personalText p {
          margin: 0 0 22px;

          font-size: 17px;

          line-height: 1.55;
        }

        .personalText a {
          display: flex;

          align-items: center;

          gap: 12px;

          width: fit-content;

          margin-top: 45px;

          padding-bottom: 8px;

          border-bottom:
            1px solid currentColor;

          color: inherit;

          font-size: 10px;

          letter-spacing: 0.1em;

          text-decoration: none;
        }


        /* ================================
   RIGHT SIDE
================================= */

.personalRight {
  position: relative;

  min-height: 700px;
}


.personalText {
  position: relative;

  z-index: 10;

  max-width: 390px;

  padding-top: 55px;
}

.personalText p {
  margin: 0 0 22px;

  font-size: 17px;

  line-height: 1.55;
}


/* ================================
   ART STACK
================================= */

.artStack {
  position: relative;

  height: 560px;

  margin-top: 60px;

  border: 1px solid rgba(0, 0, 0, 0.16);

  background: rgba(0, 0, 0, 0.025);

  overflow: hidden;
}


/* ================================
   ART PIECES
================================= */

.artPiece {
  position: absolute;

  overflow: hidden;

  background: #e9e4d9;

  box-shadow:
    0 25px 50px
    rgba(0,0,0,0.12);

  cursor: pointer;

  will-change: transform;
}

.artPiece img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}


.artOne {
  width: 230px;
  height: 290px;

  top: 105px;
  left: 70px;

  z-index: 1;

  transform: rotate(-3deg);
}

.artTwo {
  width: 270px;
  height: 340px;

  top: 55px;
  right: 95px;

  z-index: 3;

  transform: rotate(2deg);
}

.artThree {
  width: 240px;
  height: 300px;

  top: 255px;
  left: 235px;

  z-index: 4;

  transform: rotate(-1deg);
}

        /* ================================
        ART DOODLE
        ================================= */

        .artDoodle {
        position: absolute;

        right: 25px;
        bottom: 55px;

        display: flex;

        align-items: center;
        justify-content: center;

        width: 55px;
        height: 55px;

        border:
            1px solid
            rgba(0,0,0,0.25);

        border-radius: 50%;

        font-size: 18px;

        transform: rotate(12deg);

        z-index: 5;
        }
        
        /* ================================
           TABLET
        ================================= */

        @media (max-width: 900px) {

  .personalSide {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .personalRight {
    min-height: auto;
  }

  .personalText {
    padding-top: 0;
  }

  .artStack {
    height: 600px;

    margin-top: 60px;
  }

}


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 600px) {

  .personalHeading h3 {
    font-size: 65px;
  }

  .personalRight {
    min-height: 620px;
  }

  .artStack {
    height: 500px;
  }

  .artOne {
    width: 150px;
    height: 200px;

    left: 5px;
    top: 100px;
  }

  .artTwo {
    width: 170px;
    height: 220px;

    right: 10px;
    top: 35px;
  }

  .artThree {
    width: 160px;
    height: 210px;

    left: 90px;
    top: 210px;
  }

  .artDoodle {
    right: 5px;
    bottom: 40px;

    width: 42px;
    height: 42px;
  }

}

      `}</style>

    </section>
  );
}