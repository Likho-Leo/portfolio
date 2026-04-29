import {Computer, Hospital, ShoppingCart } from "lucide-react"
function Projects(){

    return(
        <section className="projects-section" id="projects">
            <div className="section-header">
                <p className="section-eyebrow light">What I've built</p>

                <h2 className="section-title dark">Projects</h2>
            </div>

            <div className="projects-grid">
                <div className="proj-card">
                    <div className="proj-thumb" style={{background: "#0c1e3a", fontSize: "32px"}}><Computer/></div>
                    <div className="proj-body">
                        <p className="proj-type">Academic · Desktop App</p>
                        <p className="proj-name">Student Mangement System</p>
                        <p className="proj-desc">Role-based desktop application for managing student records. Implements CRUD operations, secure login, and structured data grids. Built with a layered architecture using ADO.NET and SQL Server.</p>
                        <div className="proj-tags">
                            <span className="tag">C#</span>
                            <span className="tag">Windows Form</span>
                            <span className="tag">SQL Server</span>
                            <span className="tag">ADO.NET</span>
                            <span className="tag">RBAC</span>
                        </div>
                        <div style={{marginTop: "14px"}}>
                            <a href="https://github.com/Likho-Leo/Student_Management_System" target="_blank" style={{fontSize: "12px", textDecoration: "none", color: "#4fc3f7"}}>View on GitHub ↗</a>
                        </div>
                    </div>
                </div>

                <div className="proj-card">
                    <div className="proj-thumb" style={{background: "#0e1f14", fontSize: "32px"}}><Hospital/></div>
                    <div className="proj-body">
                        <p className="proj-type">Academic · Web App</p>
                        <p className="proj-name">Ward Mangement System</p>
                        <p className="proj-desc">Hospital management web app built with ASP.NET Core MVC and Dapper. I designed and implemented the Nurse and Nursing Sister subsystem, including paitient record handling, role-based auth, and CRUD via repository pattern.</p>
                        <div className="proj-tags">
                            <span className="tag">C#</span>
                            <span className="tag">ASP.NET Core</span>
                            <span className="tag">SQL Server</span>
                            <span className="tag">Dapper</span>
                            <span className="tag">MVC</span>
                        </div>
                        <div style={{marginTop: "14px", display: "flex", gap: "12px", alignItems: "center"}}>
                            <a href="https://github.com/Likho-Leo/Student_Management_System" target="_blank" style={{fontSize: "12px", textDecoration: "none", color: "#4fc3f7"}}>View on GitHub ↗</a>
                            <a href="https://youtu.be/LBBG_p6BF90" target="_blank" style={{fontSize: "12px", textDecoration: "none", color: "#3fb950"}}>Watch Demo ↗</a>
                        </div>
                    </div>
                </div>

                 <div className="proj-card">
                    <div className="proj-thumb" style={{background: "#1a0f00", fontSize: "32px"}}><ShoppingCart/></div>
                    <div className="proj-body">
                        <p className="proj-type">Hackathon · Web Platform</p>
                        <p className="proj-name">AutoSMME Marketplace</p>
                        <p className="proj-desc">Web platform built during the Eastern Cape Automative & eMobility Hackathon to connect small business, service providers, and customer. Features-booking management, customer and provider dashboards, adn order tracking.</p>
                        <div className="proj-tags">
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">Hackathon</span>
                        </div>
                        <div style={{marginTop: "14px", display: "flex", gap: "12px", alignItems: "center"}}>
                            <a href="https://github.com/Likho-Leo/AutoSMME-Marketplace" target="_blank" style={{fontSize: "12px", textDecoration: "none", color: "#4fc3f7"}}>View on GitHub ↗</a>
                            <a href="https://youtu.be/BEdOIwZLY0E" target="_blank" style={{fontSize: "12px", textDecoration: "none", color: "#3fb950"}}>Watch Demo ↗</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Projects;