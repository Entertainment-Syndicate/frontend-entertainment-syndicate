import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedArray: [],
    };
  }
  componentDidMount = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER}/getFeed`).then((res) => {
      this.setState({
        feedArray: res.data,
      });
      console.log(this.state.feedArray);
    });
  };

  render() {
    return (
      <div className="card-div">
        <hr />
        <h2 className="h2class">Favorite Movies</h2>
        <hr />

        <Container
        // style={{ padding: '0' }}
        >
          <Row
            className=" justify-content-center"
            // style={{ marginRight: '0', marginLeft: '60px' }}
          >
            {this.state.feedArray.map((item, idx) => {
              return (
                <Col
                  key={idx}
                  sm={6}
                  lg={3}
                  // style={{ paddingRight: '0', paddingLeft: '0' }}
                >
                  <Card
                    className="card-card"
                    // style={{ margin: '30px 20px 30px 20px' }}
                    style={{ margin: '30px' }}
                  >
                    <Card.Header>
                      <Image
                        style={{ width: '50px', height: '50px', float: 'left' }}
                        src={item.userImage}
                        alt={item.name}
                        roundedCircle
                      />
                      <Card.Text> {item.name}</Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title> {item.title}</Card.Title>
                    </Card.Body>
                    <Card.Text> {item.feedback}</Card.Text>
                    <Card.Img variant="top" src={item.image} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Feed;
