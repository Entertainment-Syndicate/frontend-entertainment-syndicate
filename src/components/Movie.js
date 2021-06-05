import React, { Component } from 'react';
import { Card, Button ,CardGroup} from 'react-bootstrap';
import axios from 'axios';

export class Movie extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            moviesData: []

        }
    }

    componentDidMount = async () => {
        const movies = await axios.get(`http://localhost:3001/movies`);
        // ${this.props.category}


        this.setState({
           moviesData: movies.data,
        });
      };
    
    render() {
        return (
            <>
            {this.state.moviesData.map((item,key) =>{
                return(

                <CardGroup>

                    <Card key={key} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Movie Name</Card.Title>
                            <Card.Text>
                                {item.id}
                                {item.name}
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Delete</Button>

                            <Button variant="primary">Feedback</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
                )
            })}

            </>
        )
    }
}

export default Movie
