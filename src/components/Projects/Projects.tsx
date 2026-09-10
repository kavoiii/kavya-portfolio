"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const projects = [
  {
    number: "02",
    title: "JPrep",
    category: "EDUCATION / WEB",
    description:
      "A platform designed to make exam preparation more structured, accessible, and engaging.",
    technologies: ["React", "TypeScript"],
    image: "/images/Jprep/Jprep.png",
    type: "browser",
    github: "https://github.com/kavoiii/JPrep2025",
    live: "https://j-prep2025.vercel.app/login",
  },
  {
    number: "03",
    title: "DRAP",
    category: "WEB APPLICATION",
    description:
      "A modern data driven real-estate web experience focused on analytics and presenting property information clearly.",
    technologies: ["React", "TypeScript"],
    image: null,
    type: "realEstate",
  },
];

export default function Projects() {
  const visualRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });

  const backPhoneY = useTransform(
    scrollYProgress,
    [0, 1],
    [60, -60]
  );

  const frontPhoneY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -30]
  );

  return (
    <>
      <section id="work" className="work">

        {/* =========================
            SECTION INTRO
        ========================== */}

        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-120px",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div>
            <p className="sectionNumber">
              01 — SELECTED WORK
            </p>

            <h2>
              Things
              <br />
              I&apos;ve built.
            </h2>
          </div>

          <p className="sectionIntro">
            A selection of projects where I&apos;ve turned ideas into
            working products — from mobile applications to web
            experiences.
          </p>
        </motion.div>


        {/* =========================
            MILEdge
        ========================== */}

        <motion.article
          className="featuredProject"
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
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          <div className="featuredTop">

            <div className="projectLabel">
              <span>01</span>
              <span>FEATURED PROJECT</span>
            </div>

            <motion.div
              className="projectArrow"
              whileHover={{
                rotate: 45,
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              ↗
            </motion.div>

          </div>


          <div className="featuredContent">

            {/* INFORMATION */}

            <motion.div
              className="featuredInfo"
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
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <p className="projectCategory">
                MOBILE / EDUCATION
              </p>

              <h3>MILEdge</h3>

              <p className="featuredDescription">
                A mobile learning platform built to make learning
                more structured, accessible, and engaging.
              </p>

              <div className="technologies">
                <span>React Native</span>
                <span>TypeScript</span>
                <span>Firebase</span>
              </div>

              <div className="viewProject">
                <span>CASE STUDY COMING SOON</span>
                <span>↗</span>
              </div>

            </motion.div>


            {/* PHONES */}

            <div
              className="miledgeVisual"
              ref={visualRef}
            >

              <div className="visualGlow" />

              {/* BACK PHONE */}

              <motion.div
                className="phone phoneBack"
                style={{
                  y: backPhoneY,
                }}
                animate={{
                  rotate: [-7, -5, -7],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="phoneScreen">
                  <img
                    src="/images/MILEdge/MILedge_one.jpeg"
                    alt="MILEdge application"
                  />
                </div>

              </motion.div>


              {/* FRONT PHONE */}

              <motion.div
                className="phone phoneFront"
                style={{
                  y: frontPhoneY,
                }}
                whileHover={{
                  scale: 1.025,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >

                <div className="phoneScreen">
                  <img
                    src="/images/MILEdge/MILEdge_two.jpeg"
                    alt="MILEdge application"
                  />
                </div>

              </motion.div>

              <div className="visualLabel">
                BUILD / LEARN / REPEAT
              </div>

            </div>

          </div>

        </motion.article>


        {/* =========================
            SECONDARY PROJECTS
        ========================== */}

        <div className="secondaryProjects">

          {projects.map((project, index) => (

            <motion.article
              className="secondaryProject"
              key={project.number}
              initial={{
                opacity: 0,
                y: 70,
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
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >

              {/* =========================
                  PROJECT VISUAL
              ========================== */}

              <div className="secondaryImage">

                {project.type === "browser" && (
                  <BrowserMockup image={project.image!} />
                )}

                {project.type === "realEstate" && (
                  <RealEstateMockup />
                )}

              </div>


              {/* =========================
                  PROJECT INFO
              ========================== */}

              <div className="secondaryMeta">

                <div className="secondaryTitleGroup">

                  <span className="projectNumber">
                    {project.number}
                  </span>

                  <div>
                    <p>{project.category}</p>

                    <h4>{project.title}</h4>
                  </div>

                </div>

                <p className="secondaryDescription">
                  {project.description}
                </p>

              </div>


              {/* =========================
                  PROJECT FOOTER
              ========================== */}

              <div className="secondaryBottom">

                <div className="technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {project.type === "browser" ? (

                  <div className="projectLinks">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE PROJECT ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB ↗
                    </a>

                  </div>

                ) : (

                  <span className="privateProject">
                    PRIVATE PROJECT
                  </span>

                )}

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      <style>{`

        /* =================================
           WORK
        ================================= */

        .work {
          padding: 120px 40px 160px;
        }


        /* =================================
           SECTION HEADER
        ================================= */

        .sectionHeader {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;

          padding-bottom: 60px;
        }

        .sectionNumber {
          margin: 0 0 28px;

          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .sectionHeader h2 {
          margin: 0;

          font-size: clamp(
            64px,
            9vw,
            130px
          );

          line-height: 0.88;
          letter-spacing: -0.06em;

          font-weight: 600;
        }

        .sectionIntro {
          max-width: 410px;

          margin: 45px 0 0;

          font-size: 18px;
          line-height: 1.55;
        }


        /* =================================
           FEATURED
        ================================= */

        .featuredProject {
          position: relative;

          overflow: hidden;

          padding: 32px;

          background: #e8e3d8;

          transition:
            transform 0.5s ease,
            background 0.5s ease;
        }

        .featuredProject:hover {
          transform: scale(0.995);
          background: #e5dfd3;
        }

        .featuredTop {
          position: relative;
          z-index: 5;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .projectLabel {
          display: flex;
          gap: 20px;

          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .projectArrow {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(
            0,
            0,
            0,
            0.22
          );

          border-radius: 50%;

          font-size: 20px;
        }


        /* =================================
           FEATURED CONTENT
        ================================= */

        .featuredContent {
          display: grid;

          grid-template-columns:
            0.8fr
            1.2fr;

          min-height: 650px;

          align-items: center;

          gap: 40px;
        }

        .featuredInfo {
          position: relative;
          z-index: 5;

          padding:
            40px
            0
            40px
            20px;
        }

        .projectCategory {
          margin: 0 0 22px;

          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .featuredInfo h3 {
          margin: 0;

          font-size: clamp(
            70px,
            9vw,
            140px
          );

          line-height: 0.82;

          letter-spacing: -0.065em;

          font-weight: 600;
        }

        .featuredDescription {
          max-width: 390px;

          margin: 40px 0 28px;

          font-size: 17px;
          line-height: 1.5;
        }


        /* =================================
           TAGS
        ================================= */

        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .technologies span {
          padding: 7px 10px;

          border: 1px solid rgba(
            0,
            0,
            0,
            0.18
          );

          border-radius: 100px;

          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }


        /* =================================
           MILEdge CTA
        ================================= */

        .viewProject {
          display: flex;
          align-items: center;
          gap: 12px;

          width: fit-content;

          margin-top: 55px;
          padding-bottom: 8px;

          border-bottom: 1px solid currentColor;

          font-size: 11px;
          letter-spacing: 0.1em;

          opacity: 0.7;
        }


        /* =================================
           MILEdge VISUAL
        ================================= */

        .miledgeVisual {
          position: relative;

          height: 600px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualGlow {
          position: absolute;

          width: 430px;
          height: 430px;

          border-radius: 50%;

          background: #b8c9d7;

          filter: blur(3px);

          opacity: 0.75;
        }


        /* =================================
           PHONE
        ================================= */

        .phone {
          position: absolute;

          width: 245px;
          height: 500px;

          padding: 9px;

          overflow: hidden;

          border-radius: 34px;

          background: #111;

          box-shadow:
            0 35px 80px
            rgba(0, 0, 0, 0.18),
            0 10px 25px
            rgba(0, 0, 0, 0.12);

          will-change: transform;
        }

        .phoneBack {
          margin-left: 105px;
          margin-top: -55px;

          z-index: 1;
        }

        .phoneFront {
          margin-left: -90px;
          margin-top: 50px;

          z-index: 3;
        }

        .phoneScreen {
          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 26px;

          background: white;
        }

        .phoneScreen img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .visualLabel {
          position: absolute;

          right: 0;
          bottom: 20px;

          writing-mode: vertical-rl;

          font-size: 9px;
          letter-spacing: 0.15em;
        }


        /* =================================
           SECONDARY PROJECTS
        ================================= */

        .secondaryProjects {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 24px;

          margin-top: 24px;
        }

        .secondaryProject {
          min-width: 0;
        }


        /* =================================
           SECONDARY IMAGE
        ================================= */

        .secondaryImage {
          position: relative;

          height: 440px;

          overflow: hidden;

          background: #ddd8cd;
        }


        /* =================================
           BROWSER MOCKUP
        ================================= */

        .browserMockup {
          position: absolute;

          left: 7%;
          top: 11%;

          width: 86%;
          height: 78%;

          overflow: hidden;

          border-radius: 10px;

          background: #f8f8f6;

          box-shadow:
            0 35px 70px
            rgba(0, 0, 0, 0.14);

          transform:
            rotate(-2deg)
            translateY(15px);

          transition:
            transform 0.7s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .secondaryProject:hover
        .browserMockup {
          transform:
            rotate(0deg)
            translateY(0)
            scale(1.02);
        }

        .browserBar {
          height: 32px;

          display: flex;
          align-items: center;

          gap: 5px;

          padding: 0 12px;

          border-bottom:
            1px solid
            rgba(0, 0, 0, 0.08);
        }

        .browserDot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #c6c3bc;
        }

        .browserScreenshot {
          display: block;

          width: 100%;
          height: calc(100% - 32px);

          object-fit: cover;

          object-position: top center;
        }


        /* =================================
           REAL ESTATE VISUAL
        ================================= */

        .realEstateVisual {
          position: absolute;

          inset: 0;

          padding: 35px;

          background: #d7dfe4;
        }

        .realEstateWindow {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 10px;

          background: #f5f2eb;

          box-shadow:
            0 30px 60px
            rgba(0, 0, 0, 0.13);

          transform:
            rotate(2deg);

          transition:
            transform 0.7s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .secondaryProject:hover
        .realEstateWindow {
          transform:
            rotate(0deg)
            translateY(-5px);
        }

        .realEstateNav {
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 18px;

          border-bottom:
            1px solid
            rgba(0, 0, 0, 0.08);
        }

        .realEstateLogo {
          font-size: 11px;
          font-weight: 700;

          letter-spacing: -0.02em;
        }

        .realEstateNavLinks {
          display: flex;
          gap: 12px;
        }

        .realEstateNavLinks span {
          width: 30px;
          height: 5px;

          border-radius: 10px;

          background: #cdd5da;
        }

        .realEstateContent {
          padding: 20px;
        }

        .realEstateEyebrow {
          margin-bottom: 7px;

          font-size: 7px;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          opacity: 0.55;
        }

        .realEstateHeading {
          width: 55%;

          font-size: 27px;
          line-height: 0.95;

          letter-spacing: -0.05em;
          font-weight: 600;
        }

        .propertyGrid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 8px;

          margin-top: 20px;
        }

        .propertyCard {
          height: 100px;

          overflow: hidden;

          border-radius: 6px;

          background: #d4dde2;
        }

        .propertyImage {
          width: 100%;
          height: 58%;

          background:
            linear-gradient(
              135deg,
              #c3ced4,
              #e2e6e5
            );
        }

        .propertyInfo {
          padding: 6px;
        }

        .propertyLine {
          width: 70%;
          height: 5px;

          margin-bottom: 5px;

          border-radius: 5px;

          background: #8999a3;
        }

        .propertyLine.small {
          width: 45%;

          background: #b0bbc0;
        }


        /* =================================
           SECONDARY META
        ================================= */

        .secondaryMeta {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 30px;

          padding: 22px 0;
        }

        .secondaryTitleGroup {
          display: flex;

          gap: 18px;
        }

        .projectNumber {
          font-size: 11px;
          opacity: 0.5;
        }

        .secondaryMeta p {
          margin: 0;

          font-size: 10px;
          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        .secondaryMeta h4 {
          margin: 7px 0 0;

          font-size: 34px;
          line-height: 1;

          letter-spacing: -0.04em;

          font-weight: 600;
        }

        .secondaryDescription {
          max-width: 290px;

          font-size: 14px !important;
          line-height: 1.5;

          text-transform: none !important;
          letter-spacing: 0 !important;

          opacity: 0.65;
        }


        /* =================================
           SECONDARY FOOTER
        ================================= */

        .secondaryBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 15px;

          border-top:
            1px solid
            rgba(0, 0, 0, 0.18);
        }

        .secondaryBottom
        .technologies {
          gap: 6px;
        }

        .secondaryBottom
        .technologies span {
          padding: 5px 8px;

          font-size: 9px;
        }

        .projectLinks {
          display: flex;
          gap: 20px;
        }

        .projectLinks a {
          color: inherit;

          font-size: 10px;
          letter-spacing: 0.08em;

          text-decoration: none;
        }

        .projectLinks a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .privateProject {
          font-size: 10px;
          letter-spacing: 0.08em;

          opacity: 0.45;
        }


        /* =================================
           TABLET
        ================================= */

        @media (max-width: 900px) {

          .work {
            padding:
              100px
              20px
              130px;
          }

          .sectionHeader {
            grid-template-columns: 1fr;

            gap: 30px;
          }

          .sectionIntro {
            margin: 0;
          }

          .featuredContent {
            grid-template-columns: 1fr;

            min-height: auto;
          }

          .featuredInfo {
            padding:
              50px
              20px
              0;
          }

          .miledgeVisual {
            height: 570px;
          }

          .secondaryProjects {
            grid-template-columns: 1fr;
          }
        }


        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 600px) {

          .work {
            padding:
              90px
              20px
              100px;
          }

          .featuredProject {
            padding: 20px;
          }

          .featuredInfo {
            padding:
              35px
              0
              0;
          }

          .featuredInfo h3 {
            font-size: 80px;
          }

          .miledgeVisual {
            height: 470px;
          }

          .phone {
            width: 175px;
            height: 355px;

            border-radius: 25px;
          }

          .phoneScreen {
            border-radius: 18px;
          }

          .phoneBack {
            margin-left: 65px;
          }

          .phoneFront {
            margin-left: -60px;
          }

          .visualGlow {
            width: 300px;
            height: 300px;
          }

          .visualLabel {
            display: none;
          }

          .secondaryImage {
            height: 330px;
          }

          .realEstateVisual {
            padding: 20px;
          }

          .secondaryMeta {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .secondaryDescription {
            max-width: 100%;
          }

          .secondaryBottom {
            align-items: flex-start;

            gap: 15px;

            flex-direction: column;
          }

          .projectLinks {
            align-self: flex-end;
          }

        }

      `}</style>
    </>
  );
}


/* =====================================
   JPREP BROWSER
===================================== */

function BrowserMockup({
  image,
}: {
  image: string;
}) {
  return (
    <motion.div
      className="browserMockup"
      whileHover={{
        y: -5,
      }}
    >

      <div className="browserBar">

        <span className="browserDot" />
        <span className="browserDot" />
        <span className="browserDot" />

      </div>

      <img
        src={image}
        alt="JPrep application"
        className="browserScreenshot"
      />

    </motion.div>
  );
}


/* =====================================
   REAL ESTATE VISUAL
===================================== */

function RealEstateMockup() {
  return (
    <div className="realEstateVisual">

      <div className="realEstateWindow">

        <div className="realEstateNav">

          <span className="realEstateLogo">
            PROPERTY
          </span>

          <div className="realEstateNavLinks">
            <span />
            <span />
            <span />
          </div>

        </div>


        <div className="realEstateContent">

          <div className="realEstateEyebrow">
            PROPERTY DISCOVERY
          </div>

          <div className="realEstateHeading">
            Analytics for Real Estate
          </div>


          <div className="propertyGrid">

            <div className="propertyCard">
              <div className="propertyImage" />

              <div className="propertyInfo">
                <div className="propertyLine" />
                <div className="propertyLine small" />
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage" />

              <div className="propertyInfo">
                <div className="propertyLine" />
                <div className="propertyLine small" />
              </div>
            </div>

            <div className="propertyCard">
              <div className="propertyImage" />

              <div className="propertyInfo">
                <div className="propertyLine" />
                <div className="propertyLine small" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}