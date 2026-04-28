import Avatar from "./assets/avatar.jpg"

function Hero(){

    return(
        <section className="hero">
            <div className="hero-left">

                <p className="hero-eyebrow">Information Technology Graduate · Gauteng, SA </p>

                <h1 className="hero-name">
                    Likho<br/>
                    <span className="line2">Leohla</span>
                </h1>

                <p className="hero-tagline">Backend Development · System Design · Problem Solving</p>
                <p className="hero-desc">
                    IT graduate specializing in backend development and system design. I build and support applications using c#, ASP.NET Core, and SQL Server, with a focus on reliability, data handling and solving real operational challanges.
                </p>

                <div className="hero-btns">
                    <a href="#projects" className="btn-primary">View my work</a>
                    <a href="#contact" className="btn-ghost">Get in touch</a>
                </div>
            </div>

            <div className="hero-right">
                <div className="avatar-wrap">
                    <div className="avatar">
                        <img src={Avatar}/>
                    </div>
                    <div className="avatar-ring"></div>
                    <div className="status-badge" title="Open to work"></div>
                </div>

                <div className="hero-info-grid">
                    <div className="info-row">
                        <span className="info-label">Status</span>
                        <span className="info-val green">Open to work</span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">Qualification</span>
                        <span className="info-val">Adv. Diploma IT</span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">University</span>
                        <span className="info-val">Nelson Mandela University</span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">Location</span>
                        <span className="info-val">Gauteng, SA</span>
                    </div>

                    <div className="info-row">
                        <span className="info-label">Focus</span>
                        <span className="info-val accent">C# · ASP.NET Core · SQL</span>
                    </div>
                </div>
            </div>

            <div className="scroll-hint">
                <div className="scroll-line"></div>
                Scroll to explore
            </div>
        </section>
    );

}

export default Hero;