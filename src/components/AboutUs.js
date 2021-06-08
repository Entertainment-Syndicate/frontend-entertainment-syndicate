import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <a className="fa fa-github" href="https://www.w3schools.com">
                z
              </a>
              <a
                className="fa fa-linkedin-square"
                href="https://www.w3schools.com"
              >
                z
              </a>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default AboutUs;
