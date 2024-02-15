import './CVPage.css';
import NavBar from './components/NavBar';

function CVPage() {
    return (
        <>
        
      <NavBar />
        <div className="cv-container">
            {/* Top section with name and contact details */}
            <header>
                <h1>Eoghan O'Mahony</h1>
            </header>
            <section className="contact-section">
                <div className="contact-details">
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/eoghan-o-mahony1" target="_blank" rel="noopener noreferrer">Eoghan OMahony</a></p>
                    <p><strong>Email:</strong> <a href='mailto:eoghano4321@gmail.com'>eoghano4321@gmail.com</a></p>
                    <p><strong>GitHub:</strong> <a href="https://www.github.com/eoghano4321" target='_blank' rel='noopener noreferrer'>eoghano4321</a></p>
                </div>
                <div className="contact-separator"></div>
            </section>


            {/* Actual Detail Section 
             Add cv-title and cv-info blocks to add a new row*/}
            <section className="cv-details">
                <div className="cv-titles">
                    <h2>Profile</h2>
                </div>
                <div className="cv-info">
                    <p>An innovative third level student with a strong work ethic and great problem-solving skills. Works well in a team or independently.</p>
                </div>


                {/* Work Experience Section */}
                <div className="cv-titles">
                    <h2>Work Experience</h2>
                </div>
                <div className="cv-info">
                </div>
                <div className="cv-titles">
                    <p>Sep - Dec, 2024</p>
                </div>
                <div className="cv-info">
                    <p>SDE Intern at Amazon Web Services, Dublin<br></br>•	Developed a full-stack application from design to delivery 
                    <br></br>•	Gained proficiency in AWS services including Lambda, S3 and CDK</p>
                </div>
                <div className="cv-titles">
                    <p>Jun - Aug, 2024</p>
                </div>
                <div className="cv-info">
                    <p>Software Engineer Intern at Mastercard, Dublin<br></br>•	Created a customer-facing reference app using React JS
                    <br></br>•	Analysed and audited documentation to ensure adherence to Mastercard Gold Standards</p>
                </div>
                <div className="cv-titles">
                    <p>Aug 2020 - Dec 2021<br></br>&<br></br>Jun - Jul, 2022</p>
                </div>
                <div className="cv-info">
                    <p>Barista at Le Chocolát de Fred, Dun Laoghaire<br></br>•	Gathered collaborative techniques by working as part of a team members in a fast-paced, intense environment
                    <br></br>•	Interacted with customers and gained valuable interpersonal skills by serving clients
                    <br></br>•	Learned organizational practices through management of stock</p>
                </div>

                {/* Education Section */}
                <div className="cv-titles">
                    <h2>Education</h2>
                </div>
                <div className="cv-info">
                </div>
                <div className="cv-titles">
                    <p>2022-Present</p>
                </div>
                <div className="cv-info">
                    <p><b>University of Limerick, Limerick, Ireland</b></p>
                </div>
                <div className="edu">
                    <p>Expected: Jun 2026</p>
                </div>
                <div className="edu-info">
                    <p>MSc in Immersive Software Engineering</p>
                </div>
                <div className="edu">
                    <p>Expected: Jun 2025</p>
                </div>
                <div className="edu-info">
                    <p>BSc in Immersive Software Engineering</p>
                </div>
                <div className="cv-titles">
                    <p>2016 - 2022</p>
                </div>
                <div className="cv-info">
                    <p><b>St. Andrew's College, Blackrock, Co. Dublin</b></p>
                </div>
                <div className="edu">
                    <p>2020 - 2022</p>
                </div>
                <div className="edu-info">
                    <p>Leaving Certificate: 613 points out of a possible 625</p>
                </div>

                {/* Achievements section */}
                
                <div className="cv-titles">
                    <p>Achievements</p>
                </div>
                <div className="cv-info">
                    <p>All Ireland Linguistics Olympiad (AILO) finalist for 6 consecutive years, including 15th place overall in 2020 and 10th place overall in 2022
                        <br></br><br></br>Deputy Head Boy at St. Andrew's College 2022
                        <br></br><br></br>Awarded St. Andrews Alumni Cup at graduation for “Outstanding contribution to student life” in 2022
                        <br></br><br></br>Awarded Council of International Schools Award for “Encouraging Diversity” in my secondary school in 2022
                        <br></br><br></br>Recognized with the Academic Achievement Award for achieving high grades in 2017, 2019, 2020, 2021 and 2022 
                        <br></br><br></br>Chief organizer of charity school chess tournament that raised €2,000 for a Ugandan school and hospital in 2020
                        <br></br><br></br>Managed a team of prefects in creating and distributing 2022 school 6th-year yearbook
                        <br></br><br></br>Irish Math's Teachers Association, National Competition 2017
                        <br></br>•	First prize (100% score)
                        <br></br><br></br>Irish Math's Teachers Association, Team National Competition 2019
                        <br></br>•	Second Prize</p>
                </div>
            </section>
        </div>
        
        </>
    );
}

export default CVPage;
