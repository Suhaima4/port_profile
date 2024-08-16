import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CV from '../pdf/SukhaimaMS.pdf'; 
import profileImage from '../Components/image/IMG.jpg';
import styles from '../Components/image/image.css';

function Home() {
  return (
    <div className={`text-center ${styles.introSection}`}>
      <Container>
        <div className="content-container">
          <div className={`text-content ${styles.textCenter}`}>
            <h1 className="display4">Web Developer</h1>
            <p className="lead">
              Hi, I'm Sukhaima M.S, a Full Stack Web Developer.
            </p>
            <p className="paragh">
              A web developer is a programmer who specializes in the development of World Wide Web applications. They create and maintain websites, ensuring they are functional, user-friendly, and visually appealing.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <img src={profileImage} alt="Profile" className="profileImage" />
          </div>
        </div>

        {/* Hire Me Section */}
        <div className={styles.hireMeSection}>
          <a href={CV} download className="btn btn-primary mt-3">
            Download CV
          </a>
        </div>

        {/* Education Section */}
        <section className="educationSection">
          <h2>Education</h2>
          <p>BCA (Bachelor of Computer Application)</p>
          <p>Calicut University, Graduated in 2017</p>
          <p>MCA (Master of Computer Application)</p>
          <p>Bharathiar University</p>
        </section>

        {/* Skills Section */}
        <section className="skillsSection">
          <h2>Skills</h2>
          <Row>
            <Col md={4} className="frontend">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </Col>
            <Col md={4} className="backend">
              <h3>Backend</h3>
              <ul>
                <li>Python</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Home;
