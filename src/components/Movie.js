import React, { Component } from 'react';
import { Card, Button, CardGroup, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Movie extends Component {
  render() {
    return (
      <CardColumns>
        {this.props.movieData.map((item2) => {
          console.log('hello movie');
          return item2.map((item, idx) => {
            return (
              <CardGroup key={idx} style={{ width: '18rem' }}>
                <Card>
                  <Card.Img variant="top" src={item.image} />

                  <Card.Body>
                    <Card.Title> {item.title}</Card.Title>
                    {/* <Card.Text>{item.description}</Card.Text>

                    <Button variant="primary">Delete</Button>
                    <Button variant="primary">Feedback</Button> */}
                  </Card.Body>
                </Card>
              </CardGroup>
            );
          });
        })}
      </CardColumns>
    );
  }
}
export default Movie;
