export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Xhoi</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Software
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum solor sit amet consectetur adipisicing elit.
                        <br /> Dolorum, quas. Amet soluta assumeda cum?
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="" alt="Hero Section" />
            </div>
        </section>
    );
}