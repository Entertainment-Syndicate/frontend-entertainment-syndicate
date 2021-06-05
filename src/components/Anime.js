import React, { Component } from 'react';
import { Card, Button ,CardGroup} from 'react-bootstrap';
import axios from 'axios';


export class Anime extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            animeData: []

        }
    }

    componentDidMount = async () => {
        const anime = await axios.get(`http://localhost:3001/anime`);

        console.log(anime);
        
        this.setState({
            animeData: anime.data,
        });
      };

    render() {
        return (
            <>
            {this.state.animeData.map((item,idx) =>{
                return(

                <CardGroup>

                    <Card key={idx} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image_url} />
                        <Card.Body>
                            <Card.Title> {item.title}</Card.Title>
                            <Card.Text>
                                
                                {item.episodes}
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

export default Anime
