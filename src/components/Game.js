import React, { Component } from 'react'
import axios from 'axios';

export class Game extends Component {
    
    constructor(props){
        super(props)
        this.state={
            gameData:[]
        }
    }

    componentDidMount = async () => {
        const games = await axios.get(`http://localhost:3001/game`);
        


        this.setState({
            gameData: games.data,
        });
      };

    render() {
        return (
            <>
            {/* {this.state.animes.map((item,idx) =>{
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
            })} */}
                
            </>
        )
    }
}

export default Game
