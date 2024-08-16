import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container mt-4">
      <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" 
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>
                HTML is the standard markup language used to create web pages. It structures the web content by defining elements like headings, paragraphs, links, images, and more.
              </Card.Text>
              <Button href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/CSS_icon.svg"
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>
                CSS (Cascading Style Sheets)is used to style and layout web pages. It controls the presentation, formatting, and layout of HTML elements.
              </Card.Text>
              <Button href='https://www.w3schools.com/css/css_intro.asp' target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://banner2.cleanpng.com/20180720/pjj/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b16dbcd8.5939232615320700654495.jpg" 
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>JAVASCRIPT</Card.Title>
              <Card.Text>
                JavaScript is a scripting language used to create and control dynamic website content, such as interactive forms, animations, and more.
              </Card.Text>
              <Button href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png" 
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>NODE JS</Card.Title>
              <Card.Text>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting using JavaScript.
              </Card.Text>
              <Button href="https://www.w3schools.com/nodejs/" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltac81c4aa3529ee37/65fd965e8f4444482dc3a079/la1a2b2h67gwwqnvs-mdb-logos.svg" 
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>MONGO DB</Card.Title>
              <Card.Text>
                MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
              </Card.Text>
              <Button href="https://www.tutorialspoint.com/mongodb/mongodb_tutorial.pdf" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://miro.medium.com/v2/resize:fit:400/1*PWe4DmAE78BLD4SHpXizMw.png" 
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>REACT</Card.Title>
              <Card.Text>
                React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.
              </Card.Text>
              <Button href="https://react-bootstrap.github.io/docs/components/accordion/" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VG7JYWc35yMoI5iQqZ7H-SyTatiD9pFSlA&s"
              className="image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>PYTHON</Card.Title>
              <Card.Text>
                Python is a high-level, interpreted programming language known for its readability and simplicity. It's widely used in web development, data science, automation, and more.
              </Card.Text>
              <Button href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noopener noreferrer">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
