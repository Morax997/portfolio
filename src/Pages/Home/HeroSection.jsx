import {Link} from "react-scroll";
import {useState} from "react";


function HeroSectionButton() {
  const [heroActive, setHeroActive] = useState(false);


  const closeMenu = () => {
    setHeroActive(false);

  }
}

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Xhoi</p>
          <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Software
                        </span>{" "}
            <br/>
            Developer
          </h1>
          <p className="hero--section--description">
            Welcome to my portfolio!
            <br/>I work with React to build applications that are dynamic and responsive!
          </p>
        </div>
        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="ContactMe"
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}