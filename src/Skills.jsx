import { Code2, Globe, Database, Layers, LayoutTemplate, MonitorSmartphone } from 'lucide-react';

function Skills(){

    return(
        <section className="skills-section" id="skills">
            <div className="section-header">
                <p className="section-eyebrow" style={{color:"#7c3aed"}}>What I work with</p>
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-icon"><Code2 color="#4fc3f7"/></div>
                    <p className="skill-name">C#</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#4fc3f7"}}></div></div>
                <p className="skill-desc">OOP, Windows Forms, backend logic, and academic/personal projects</p>
                </div>

                <div className="skill-card">
                    <div className="skill-icon"><Globe color="#7c3aed"/></div>
                    <p className="skill-name">ASP.NET Core MVC</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#7c3aed"}}></div></div>
                <p className="skill-desc">Web application development, MVC architecture, razor views, Dependency Injection</p>
                </div>

                <div className="skill-card">
                    <div className="skill-icon"><Database color="#3fb950"/></div>
                    <p className="skill-name">SQL Server</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#3fb950"}}></div></div>
                <p className="skill-desc">Database design, CRUD operations, relational data management</p>
                </div>

                <div className="skill-card">
                    <div className="skill-icon"><Layers color="#f59e0b"/></div>
                    <p className="skill-name">ADO.NET / Dapper</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#f59e0b"}}></div></div>
                <p className="skill-desc">Data access layers, parameterised queries, repository pattern</p>
                </div>

                <div className="skill-card">
                    <div className="skill-icon"><LayoutTemplate color="#ec4899"/></div>
                    <p className="skill-name">System Design</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#ec4899"}}></div></div>
                <p className="skill-desc">Layered architecture, SDLC, role-based access control, structured problem solving</p>
                </div>

                <div className="skill-card">
                    <div className="skill-icon"><MonitorSmartphone color="#f97316"/></div>
                    <p className="skill-name">Full Stack Basics</p>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{width:"80%", background:"#f97316"}}></div></div>
                <p className="skill-desc">HTML, CSS, JavaScript - frontend fundamentals from FNB App Acedamy training</p>
                </div>
            </div>
        </section>
    );

}

export default Skills;