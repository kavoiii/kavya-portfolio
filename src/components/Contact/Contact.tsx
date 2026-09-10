"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      {/* =================================
          TOP LABEL
      ================================= */}

      <motion.div
        className="contactTop"
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
        }}
      >
        <div className="contactLabel">
          <span>04</span>
          <span>CONTACT</span>
        </div>

        <span className="contactAvailability">
          OPEN TO OPPORTUNITIES
        </span>
      </motion.div>


      {/* =================================
          MAIN HEADING
      ================================= */}

      <motion.div
        className="contactHeading"
        initial={{
          opacity: 0,
          y: 100,
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
          duration: 1,
          ease: "easeOut",
        }}
      >
        <h2>
          Let`s make
          <br />
          something
          <br />
          <span>good.</span>
        </h2>
      </motion.div>


      {/* =================================
          INTRO
      ================================= */}

      <motion.div
        className="contactIntro"
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
        <p>
          Have a role, project, or interesting
          problem in mind?
        </p>

        <motion.a
          href="mailto:kavyagauri2003@gmail.com"
          className="emailLink"
          whileHover={{
            x: 10,
          }}
        >
          EMAIL ME
          <span>↗</span>
        </motion.a>
      </motion.div>


      {/* =================================
          LINKS
      ================================= */}

      <div className="contactLinks">

        <motion.a
          href="mailto:kavyagauri2003@gmail.com"
          className="contactLink"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <span className="linkLabel">
            EMAIL
          </span>

          <span className="linkValue">
            kavyagauri2003
          </span>

          <span className="linkArrow">
            ↗
          </span>
        </motion.a>


        <motion.a
          href="https://linkedin.com/in/kavyagauri"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <span className="linkLabel">
            LINKEDIN
          </span>

          <span className="linkValue">
            Kavya Gauri
          </span>

          <span className="linkArrow">
            ↗
          </span>
        </motion.a>


        <motion.a
          href="https://github.com/kavoiii"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <span className="linkLabel">
            GITHUB
          </span>

          <span className="linkValue">
            kavoiii
          </span>

          <span className="linkArrow">
            ↗
          </span>
        </motion.a>

      </div>


      {/* =================================
          FOOTER
      ================================= */}

      <footer className="contactFooter">

        <span>
          © 2026 KAVYA
        </span>

        <span>
          SOFTWARE DEVELOPER
        </span>

        <button
          className="backToTop"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          BACK TO TOP ↑
        </button>

      </footer>


      {/* =================================
          CSS
      ================================= */}

      <style>{`

        /* ================================
           CONTACT
        ================================= */

        .contact {
          min-height: 100vh;

          padding:
            150px
            40px
            30px;

          background: #111111;

          color: #f5f2ea;

          display: flex;

          flex-direction: column;
        }


        /* ================================
           TOP
        ================================= */

        .contactTop {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 100px;

          font-size: 10px;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        .contactLabel {
          display: flex;

          gap: 18px;
        }

        .contactLabel span:first-child {
          opacity: 0.45;
        }

        .contactAvailability {
          opacity: 0.5;
        }


        /* ================================
           HEADING
        ================================= */

        .contactHeading h2 {
          margin: 0;

          font-size: clamp(
            80px,
            13vw,
            190px
          );

          line-height: 0.84;

          letter-spacing: -0.07em;

          font-weight: 600;
        }

        .contactHeading h2 span {
          opacity: 0.4;
        }


        /* ================================
           INTRO
        ================================= */

        .contactIntro {
          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          margin-top: 90px;

          padding-left: 25%;

          padding-right: 8%;
        }

        .contactIntro p {
          max-width: 360px;

          margin: 0;

          font-size: 18px;

          line-height: 1.5;
        }


        /* ================================
           EMAIL BUTTON
        ================================= */

        .emailLink {
          display: flex;

          align-items: center;

          gap: 15px;

          padding-bottom: 10px;

          border-bottom:
            1px solid
            rgba(245,242,234,0.6);

          color: inherit;

          font-size: 11px;

          letter-spacing: 0.12em;

          text-decoration: none;
        }


        /* ================================
           LINKS
        ================================= */

        .contactLinks {
          margin-top: 150px;

          border-top:
            1px solid
            rgba(245,242,234,0.2);
        }

        .contactLink {
          display: grid;

          grid-template-columns:
            0.25fr 1fr auto;

          align-items: center;

          gap: 30px;

          padding: 22px 0;

          border-bottom:
            1px solid
            rgba(245,242,234,0.2);

          color: inherit;

          text-decoration: none;

          transition:
            padding-left 0.3s ease;
        }

        .contactLink:hover {
          padding-left: 12px;
        }

        .linkLabel {
          font-size: 10px;

          letter-spacing: 0.12em;

          opacity: 0.45;
        }

        .linkValue {
          font-size: 16px;
        }

        .linkArrow {
          font-size: 18px;

          opacity: 0.7;
        }


        /* ================================
           FOOTER
        ================================= */

        .contactFooter {
          display: grid;

          grid-template-columns:
            1fr 1fr 1fr;

          margin-top: auto;

          padding-top: 100px;

          font-size: 9px;

          letter-spacing: 0.12em;

          opacity: 0.45;
        }

        .contactFooter span:nth-child(2) {
          text-align: center;
        }

        .backToTop {
          justify-self: end;

          padding: 0;

          border: none;

          background: none;

          color: inherit;

          font: inherit;

          letter-spacing: inherit;

          cursor: pointer;
        }


        /* ================================
           TABLET
        ================================= */

        @media (max-width: 900px) {

          .contact {
            padding:
              120px
              25px
              25px;
          }

          .contactIntro {
            padding-left: 0;
            padding-right: 0;

            margin-top: 70px;
          }

          .contactLinks {
            margin-top: 100px;
          }

        }


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 600px) {

          .contact {
            min-height: auto;

            padding:
              100px
              20px
              25px;
          }

          .contactTop {
            margin-bottom: 80px;
          }

          .contactAvailability {
            display: none;
          }

          .contactHeading h2 {
            font-size: 72px;
          }

          .contactIntro {
            flex-direction: column;

            align-items: flex-start;

            gap: 35px;

            margin-top: 60px;
          }

          .contactLinks {
            margin-top: 100px;
          }

          .contactLink {
            grid-template-columns:
              0.35fr 1fr auto;

            gap: 12px;
          }

          .linkValue {
            font-size: 13px;
          }

          .contactFooter {
            grid-template-columns: 1fr;

            gap: 18px;

            padding-top: 80px;
          }

          .contactFooter span:nth-child(2) {
            text-align: left;
          }

          .backToTop {
            justify-self: start;
          }

        }

      `}</style>

    </section>
  );
}