import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, CardGroup } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export class HomeFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
    };
  }

  componentDidMount = () => {
    let email = this.props.auth0.user.email;
    // console.log(this.props.auth0);
    // let email = 'yahiaqous@gmail.com';
    axios
      .get(`http://localhost:3001/favorite`, { params: { email } })
      .then((res) => {
        console.log(res);
        this.setState({
          favoriteList: [
            res.data.favoriteAnime,
            res.data.favoriteMovie,
            res.data.favoriteGame,
          ],
        });
        console.log(this.state.favoriteList);
      });
  };

  render() {
    return (
      <div>
        <h2>Favourite list</h2>
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
          {this.state.favoriteList.map((item2) => {
            // console.log('hello Anime');
            return item2.map((item, idx) => {
              return (
                <CardGroup key={idx} style={{ width: '18rem' }}>
                  <Card>
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
      </div>
    );
  }
}

export default withAuth0(HomeFavorite);
