import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="logo">
          KAVYA
        </Link>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
  href="https://docs.google.com/document/d/1nbPQAuj68hxFLt_DmLNi25O2mSHPmozBZ6rX4C1tvwM/edit?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume ↗
</a>
        </div>
      </nav>

      <style>{`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 28px 40px;

    box-sizing: border-box;

    background: rgba(245, 242, 234, 0.78);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    transition:
      padding 0.3s ease,
      background 0.3s ease;
  }

  .logo {
    flex-shrink: 0;

    color: var(--foreground);
    text-decoration: none;

    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .navLinks {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .navLinks a {
    position: relative;

    color: var(--foreground);
    text-decoration: none;

    font-size: 14px;
    white-space: nowrap;
  }

  .navLinks a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -5px;

    width: 100%;
    height: 1px;

    background: currentColor;

    transform: scaleX(0);
    transform-origin: right;

    transition: transform 0.3s ease;
  }

  .navLinks a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  /* Tablet */
  @media (max-width: 800px) {
    .navbar {
      padding: 22px 24px;
    }

    .navLinks {
      gap: 20px;
    }

    .navLinks a {
      font-size: 13px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .navbar {
      padding: 20px;
    }

    .navLinks {
      gap: 15px;
    }

    .navLinks a {
      font-size: 12px;
    }
  }

  /* Very small phones */
  @media (max-width: 420px) {
    .navbar {
      padding: 18px 16px;
    }

    .logo {
      font-size: 13px;
    }

    .navLinks {
      gap: 11px;
    }

    .navLinks a {
      font-size: 11px;
    }
  }
`}</style>
    </>
  );
}