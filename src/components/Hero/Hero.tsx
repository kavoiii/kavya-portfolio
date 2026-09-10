"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">SOFTWARE DEVELOPER</p>

          <h1 className="title">
            I make
            <br />
            things.
          </h1>

          <p className="description">
            I build digital experiences with code, curiosity, and a little bit
            of creativity.
          </p>

          <motion.a
            href="#work"
            className="scrollLink"
            whileHover={{ x: 8 }}
          >
            <span className="arrow">↓</span>
            <span>SCROLL TO EXPLORE</span>
          </motion.a>
        </div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="imageFrame"
            whileHover={{
              rotate: -1.5,
              scale: 1.015,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <img
              src="/images/kavya.png"
              alt="Kavya"
              className="heroImage"
            />
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        /* ========================================
           DESKTOP
           ORIGINAL DESIGN — DO NOT CHANGE
        ======================================== */

        .hero {
          min-height: calc(100vh - 70px);
          padding: 40px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;

          overflow: hidden;
        }

        .heroText {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          margin: 0 0 24px;

          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.14em;
        }

        .title {
          margin: 0;

          font-size: clamp(72px, 10vw, 150px);
          line-height: 0.88;
          letter-spacing: -0.06em;
          font-weight: 600;
        }

        .description {
          max-width: 430px;
          margin: 40px 0 0;

          font-size: 18px;
          line-height: 1.5;
        }

        .scrollLink {
          display: flex;
          align-items: center;
          gap: 12px;

          width: fit-content;
          margin-top: 50px;

          color: var(--foreground);
          text-decoration: none;

          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .arrow {
          font-size: 24px;
          line-height: 1;
        }

        .heroVisual {
          position: relative;

          width: min(100%, 620px);

          justify-self: end;
        }

        .imageFrame {
          position: relative;

          width: 100%;
          height: 680px;

          overflow: hidden;

          transform-origin: center;
        }

        .heroImage {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          border-radius: 3px;
        }


        /* ========================================
           TABLET
           801px — 1100px
        ======================================== */

        @media (max-width: 1100px) {
          .hero {
            gap: 35px;
            padding: 35px;
          }

          .heroVisual {
            width: min(100%, 560px);
          }

          .imageFrame {
            height: 620px;
          }

          .title {
            font-size: clamp(68px, 9vw, 115px);
          }

          .description {
            max-width: 400px;
            font-size: 17px;
          }
        }


        /* ========================================
           SMALL TABLET / MOBILE
           601px — 800px
        ======================================== */

        @media (max-width: 800px) {
          .hero {
            min-height: auto;

            padding: 120px 30px 80px;

            grid-template-columns: 1fr;

            gap: 60px;
          }

          .heroText {
            width: 100%;
          }

          .eyebrow {
            margin-bottom: 22px;

            font-size: 12px;
          }

          .title {
            font-size: clamp(72px, 13vw, 110px);

            line-height: 0.88;
          }

          .description {
            max-width: 500px;

            margin-top: 32px;

            font-size: 17px;
          }

          .scrollLink {
            margin-top: 38px;
          }

          .heroVisual {
            width: 100%;

            max-width: 620px;

            justify-self: center;
          }

          .imageFrame {
            height: min(620px, 85vw);
          }
        }


        /* ========================================
           MOBILE
           501px — 600px
        ======================================== */

        @media (max-width: 600px) {
          .hero {
            padding: 105px 20px 70px;

            gap: 45px;
          }

          .title {
            font-size: clamp(64px, 16vw, 90px);
          }

          .description {
            margin-top: 28px;

            font-size: 16px;

            line-height: 1.5;
          }

          .scrollLink {
            margin-top: 32px;

            font-size: 12px;
          }

          .arrow {
            font-size: 21px;
          }

          .heroVisual {
            max-width: 520px;
          }

          .imageFrame {
            height: 115vw;

            max-height: 560px;
          }
        }


        /* ========================================
           SMALL PHONES
           ≤ 500px
        ======================================== */

        @media (max-width: 500px) {
          .hero {
            padding: 100px 20px 60px;

            gap: 38px;
          }

          .eyebrow {
            margin-bottom: 20px;

            font-size: 11px;
          }

          .title {
            font-size: clamp(58px, 17vw, 78px);

            line-height: 0.9;
          }

          .description {
            max-width: 100%;

            margin-top: 25px;

            font-size: 15px;
          }

          .scrollLink {
            margin-top: 28px;
          }

          .heroVisual {
            max-width: 100%;
          }

          .imageFrame {
            height: 110vw;

            max-height: 480px;
          }
        }


        /* ========================================
           VERY SMALL PHONES
           ≤ 380px
        ======================================== */

        @media (max-width: 380px) {
          .hero {
            padding-left: 16px;
            padding-right: 16px;
          }

          .title {
            font-size: 56px;
          }

          .imageFrame {
            height: 105vw;

            max-height: 430px;
          }
        }
      `}</style>
    </>
  );
}