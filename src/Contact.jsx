
function Contact(){

    return(

        <section className="contact-section" id="contact">
            <div>
                <h2 classClass="contact-heading">Let's build<br/>something.</h2>
                <p className="contact-sub">Open to job opportunities, graduate roles, and collaborations. If you're looking for a backend devloper who takes ownership and keeps learning, let;s talk.</p>
                <div className="contact-btns">
                    <a href="mailto:likholeohla15@gmail.com" className="btn-primary">Send an email</a>
                    <a href="https://github.com/Likho-Leo" target="_blank" className="btn-ghost">GitHub</a>
                    <a href="https://za.linkedin.com/in/likho-leohla-b0479625a" target="_blank" className="btn-ghost">LinkedIn</a>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-row">
                    <span className="contact-row-label">Email</span>
                    <span className="contact-row-val"><a href="mailto:likholeohla15@gmail.com" >likholeohla15@gmail.com</a></span>
                </div>
                <div className="contact-row">
                    <span className="contact-row-label">Location</span>
                    <span className="contact-row-val">Gauteng, South Africa</span>
                </div>
                <div className="contact-row">
                    <span className="contact-row-label">Education</span>
                    <span className="contact-row-val">Adv. Diploma, Nelson Mandela University</span>
                </div>
                <div className="contact-row">
                    <span className="contact-row-label">Status</span>
                    <span className="contact-row-val" style={{color:"#3fb950"}}>Available for opportunities</span>
                </div>
            </div>
        </section>

    );

} export default Contact;