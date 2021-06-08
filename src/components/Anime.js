import React, { Component } from 'react';
import {
  Card,
  Button,
  CardGroup,
  CardColumns,
  Modal,
  CardDeck,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export class Anime extends Component {
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
    return (
      <div className="card-div">
        {/* If All types must be shown  => render by Carousel else render by Cards*/}
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
            {this.props.animeData.map((item2) => {
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
          <Container
          // style={{ padding: '0' }}
          >
            <Row
              className=" justify-content-center"
              // style={{ marginRight: '0', marginLeft: '60px' }}
            >
              {this.props.animeData.map((item2) => {
                return item2.map((item, idx) => {
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

        {/* Modal */}
        <Modal show={this.state.displayModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.item.image} alt={this.state.item.title}></img>
            <br></br>
            <p>Description: {this.state.item.description}</p>

            <p>Date: {this.state.item.date}</p>

            <p>Type: {this.state.item.type}</p>

            <p>Category: {this.state.item.category}</p>

            <p>Episodes: {this.state.item.episodes}</p>

            <p>
              Score & Rating: {this.state.item.score} ,{this.state.item.rate}
            </p>

            <a href={this.state.item.watchURL}>Watch Here</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
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
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Anime;
