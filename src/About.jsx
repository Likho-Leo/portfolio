
function About(){

    return(
        <section className="about-section" id="about">
            <div className="section-header">
                <p className="section-eybrow" style={{color: "#7c3ead"}}>Who I am</p>
                <h2 className="section-title">About me</h2>
            </div>
            <div className="about-grid">
                <div className="about-text">
                    <p>I'm Likho Leohla, an Information Technology graduate from Nelson Mandela University.</p>
                    <p>I focus on software development, with experience in building and supporting applications using C#, ASP.NET Core, and SQL Server. My work involves solving problems through structured system design, debugging and imroving application reliablity.</p>
                    <div className="pull-quote">
                        "I approach development with a mindset of continous improvement. I'm always looking for better ways to build, optimise, and support software systems."
                    </div>
                    <p>Beyond academics, I continously develop my skills through personal projects and self learning. I have a strong interest in building systems that are practical, efficient and scalable.</p>
                    <p>I value teamwork, clear communications, and taking ownership of problems. I've learned that carrying everything solo will burn you out. Collaboration and accountability are what make systems and teams work well.</p>
                </div>
                <div className="about-aside">
                    <div className="aside-card">
                        <p className="aside-title">Qualifications</p>
                        <div className="aside-item">
                            <span className="aside-key">Adv. Diploma IT <span style={{color:"#3fb950", fontSize:"10px"}}>Cum Laude</span></span>
                            <span className="aside-val"> NMU · 2025</span>
                        </div>
                        <div className="aside-item">
                            <span className="aside-key">Diploma IT <span style={{color:"#3fb950", fontSize:"10px"}}>Cum Laude</span></span>
                            <span className="aside-val"> NMU · 2022-2024</span>
                        </div>
                        <div className="aside-item">
                            <span className="aside-key">Matriculated</span>
                            <span className="aside-val"> St Monica's · 2021</span>
                        </div>
                    </div>
                    <div className="about-aside">
                        <div className="aside-card">
                            <p className="aside-title">Certifications</p>
                            <div className="aside-item">
                                <span className="aside-key">Gen AI for Professionals</span>
                                <span className="aside-val"> WeThinkCode · 2026</span>
                            </div>
                            <div className="aside-item">
                                <span className="aside-key">Gen AI for Devlopers</span>
                                <span className="aside-val"> WeThinkCode · 2026</span>
                            </div>
                            <div className="aside-item">
                                <span className="aside-key">Full Stack Development</span>
                                <span className="aside-val"> FNB Academy · 2025</span>
                            </div>
                            <div className="aside-item">
                                <span className="aside-key">EC Automative Hackathon</span>
                                <span className="aside-val"> Participant · 2025</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-aside">
                        <div className="aside-card">
                            <p className="aside-title">Core focus</p>
                            <div className="aside-item">
                                <span className="aside-key">Backend Dev</span>
                                <span className="aside-val"> C# · ASP.NET Core</span>
                            </div>
                            <div className="aside-item">
                                <span className="aside-key">Data</span>
                                <span className="aside-val"> SQL Server · Dapper</span>
                            </div>
                            <div className="aside-item">
                                <span className="aside-key">Architecture</span>
                                <span className="aside-val"> MVC · Layered Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;