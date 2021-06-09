import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './Feed.css';

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
        <div className="feedTitle">
          <hr />
          <h2 className="h2class ">Reviews Feed</h2>
          <hr />
        </div>
        {this.state.feedArray.length !== 0 ? (
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
                          className="profilePic"
                          src={item.userImage}
                          alt={item.name}
                          roundedCircle
                        />
                        <Card.Text className="userNameFeed">
                          {item.name}
                        </Card.Text>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text className="feedFeedback">
                          {item.feedback}
                        </Card.Text>
                        <Card.Title> {item.title}</Card.Title>
                      </Card.Body>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="imgFeed"
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        ) : (
          <div>
            <div className="userborder something">
              <h3 className="userh3">there is nothing in the feed </h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Feed;
