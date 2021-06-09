import React, { Component } from 'react';
import {
  Card,
  Button,
  CardGroup,
  // CardColumns,
  Modal,
  // CardDeck,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { withAuth0 } from '@auth0/auth0-react';
export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      item: {},
    };
  }

  showModal = (item) => {
    this.setState({
      displayModal: true,
      item: item,
    });
  };
  hideModal = () => {
    this.setState({
      displayModal: false,
    });
  };
  render() {
    const { isAuthenticated, loginWithRedirect } = this.props.auth0;

    return (
      <div className="card-div">
        {this.props.showAnime && this.props.showMovie && this.props.showGame ? (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            transitionDuration={300}
          >
            {this.props.gameData.map((item2) => {
              // console.log('hello Anime');
              return item2.map((item, idx) => {
                return (
                  <CardGroup className="card-group" key={idx}>
                    <Card
                      className="card-carousel"
                      onClick={() => this.showModal(item)}
                    >
                      <Card.Img variant="top" src={item.image} />

                      <Card.Body>
                        <Card.Title> {item.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                );
              });
            })}
          </Carousel>
        ) : (
          <Container>
            <Row className=" justify-content-center">
              {this.props.gameData.map((item2) => {
                return item2.map((item, idx) => {
                  return (
                    <Col key={idx} lg={3}>
                      <Card
                        className="card-card"
                        style={{ margin: '30px' }}
                        onClick={() => this.showModal(item)}
                      >
                        <Card.Img variant="top" src={item.image} />

                        <Card.Body>
                          <Card.Title> {item.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                });
              })}
            </Row>
          </Container>
        )}

        <Modal show={this.state.displayModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalText">
            <img
              src={this.state.item.image}
              alt={this.state.item.title}
              width="465"
            ></img>
            <br></br>
            <p>
              <span>Description:</span> {this.state.item.description}
            </p>

            <p>
              <span>Date</span> {this.state.item.date}
            </p>

            <p>
              <span>Type</span> {this.state.item.type}
            </p>

            <p>
              <span>Category</span> {this.state.item.category}
            </p>

            <p>
              <span>Platform</span> {this.state.item.platform}
            </p>

            <p>
              <span>Publisher & Developer</span> {this.state.item.publisher} ,
              {this.state.item.developer}
            </p>

            <a href={this.state.item.installingURL}>Install Here</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            {isAuthenticated ? (
              <Button
                variant="primary"
                // 5- Add to Favorite Button (to database)
                onClick={() => {
                  this.props.addToFavoriteHandler(this.state.item);
                  this.setState({
                    displayModal: false,
                  });
                }}
              >
                Add to Favorite
              </Button>
            ) : (
              <Button
                style={{ backgroundColor: 'red', border: 'none' }}
                onClick={() => loginWithRedirect()}
              >
                Add to Favorite
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default withAuth0(Game);
