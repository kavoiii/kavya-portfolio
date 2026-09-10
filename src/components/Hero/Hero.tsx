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

        @media (max-width: 800px) {
          .hero {
            min-height: auto;
            padding: 40px 20px 60px;

            grid-template-columns: 1fr;
          }

          .heroVisual {
            width: 100%;
            max-width: 500px;
          }

          .imageFrame {
            height: 550px;
          }

          .accent {
            right: -10px;
          }
        }
      `}</style>
    </>
  );
}