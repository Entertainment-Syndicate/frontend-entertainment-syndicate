import React, { Component } from 'react';
import {
  Card,
  // CardColumns,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import github from './imgabout/github.png';
import linkedin from './imgabout/in.png';
import mail from './imgabout/mail.png';
import heba11 from './imgabout/heba.jpg';
import dana11 from './imgabout/dana.jpg';
import yahia from './imgabout/yahia.jpg';
import mahmoud from './imgabout/mahmoud.jpg';
import abd from './imgabout/abd.jpeg';
import './about-us.css';

export class AboutUs extends Component {
  render() {
    return (
      <div className="bodyDiv">
        <h3 className="h2class">The Syndicate</h3>
        <Container fluid="md">
          <Row className=" justify-content-center">
            {/* <CardColumns className="columns"> */}
            <Col sm={6} lg={4}>
              <Card style={{ width: '18rem' }} className="cardAboutus">
                <Card.Img src={heba11} alt="" className="cardimg" />
                <Card.Body>
                  <Card.Title>Hiba Salem</Card.Title>
                  <Card.Text>
                    I am an architect and I am really excited to be a software
                    developer
                  </Card.Text>
                  <div className="aboutus-icon">
                    <a href="https://github.com/hibasalem">
                      <img src={github} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://www.linkedin.com/in/hiba-j-salem/">
                      <img src={linkedin} alt="" width="30px" height="30px" />
                    </a>
                    <a href="mailto:salemhiba.hs@gmail.com">
                      <img src={mail} alt="" width="30px" height="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card style={{ width: '18rem' }} className="cardAboutus">
                <Card.Img src={dana11} alt="" className="cardimg" />
                <Card.Body>
                  <Card.Title>Dana Younis</Card.Title>
                  <Card.Text>
                    Civil engineer planning to become a software developer
                  </Card.Text>
                  <div className="aboutus-icon">
                    <a href="https://github.com/dana-younis">
                      <img src={github} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://www.linkedin.com/in/dana-younis-1598a01a9/">
                      <img src={linkedin} alt="" width="30px" height="30px" />
                    </a>
                    <a href="mailto:younisdana7@gmail.com">
                      <img src={mail} alt="" width="30px" height="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card style={{ width: '18rem' }} className="cardAboutus">
                <Card.Img src={yahia} alt="" className="cardimg" />

                <Card.Body>
                  <Card.Title>Yahia Al-Qous</Card.Title>
                  <Card.Text>
                    Architect attended to be a front-end developer
                  </Card.Text>
                  <div className="aboutus-icon">
                    <a href="https://github.com/YAHIAQOUS">
                      <img src={github} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://www.linkedin.com/in/yahiaqous/">
                      <img src={linkedin} alt="" width="30px" height="30px" />
                    </a>

                    <a href="mailto:yahiaqous@gmail.com">
                      <img src={mail} alt="" width="30px" height="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card style={{ width: '18rem' }} className="cardAboutus">
                <Card.Img src={abd} alt="" className="cardimg" />

                <Card.Body>
                  <Card.Title>Abdelrahman Al Daour</Card.Title>
                  <Card.Text>
                    Iam a Civil Engineer, eager to learn about programming and
                    improve myself in this field
                  </Card.Text>
                  <div className="aboutus-icon">
                    <a href="https://github.com/Daour211">
                      <img src={github} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://www.linkedin.com/in/abd-al-rahman-al-daour-5353a9136/">
                      <img src={linkedin} alt="" width="30px" height="30px" />
                    </a>

                    <a href="mailto: Daour.211@gmail.com">
                      <img src={mail} alt="" width="30px" height="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card style={{ width: '18rem' }} className="cardAboutus">
                <Card.Img src={mahmoud} alt="" className="cardimg" />

                <Card.Body>
                  <Card.Title>Mahmoud Saadeh</Card.Title>
                  <Card.Text>
                    My goal is to get the most amount of knowledge in Web
                    development
                  </Card.Text>
                  <div className="aboutus-icon">
                    <a href="https://github.com/Mahmoud-Saadeh">
                      <img src={github} alt="" width="30px" height="30px" />
                    </a>

                    <a href="https://www.linkedin.com/in/mahmoud-saadeh/">
                      <img src={linkedin} alt="" width="30px" height="30px" />
                    </a>
                    <a href="mailto: mahmoud.saadeh998@gmail.com">
                      <img src={mail} alt="" width="30px" height="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* </CardColumns> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
