import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./card.css"
import Stars from '../Stars/Stars';
// import { v4 as uuidv4 } from 'uuid';

const MovieCard = ({ movie: { title, image, desc, year, rate } }) => {
    return (
        <div >
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title> 
                    <Card.Text>
                        {desc} <br />
                        {year} <br />
                        <Stars rate={rate} isEdit={false} />

                    </Card.Text>
                    <Button variant="primary">Show more</Button>
                </Card.Body>
            </Card>



        </div>)
}

export default MovieCard