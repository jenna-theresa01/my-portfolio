import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/img/hero-image.jpg"
        className="hero-img"
        width={300}
        height={300}
        alt="hero image"
      />
      <div className="hero-text">
        <h1>Hi, I'm Jenna</h1>
        <p>
          I am a full stack software developer based in Kentucky. I graduated
          from a Software Development Bootcamp in December of 2023. I'm excited
          to continue sharing my progress in this journey of lifelong learning.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
