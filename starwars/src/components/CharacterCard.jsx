import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function CharacterCard(props) {
    const [cardData, setCardData] = useState(props.entry);
    return (
        <Card>
            <CardBody>
                <fieldset className='card-data-wrapper'>
                    <legend><CardTitle><h3>{cardData.name}</h3></CardTitle></legend>
                    <CardSubtitle>Birth Year:{cardData.birth_year}</CardSubtitle>
                    <CardSubtitle>Height: {cardData.height}</CardSubtitle>
                    <CardSubtitle>Mass: {cardData.mass}</CardSubtitle>
                    <CardSubtitle>Hair Color: {cardData.hair_color}</CardSubtitle>
                    <CardSubtitle>Skin Color: {cardData.skin_color}</CardSubtitle>
                    <CardSubtitle>Eye Color: {cardData.eye_color}</CardSubtitle>
                    <CardSubtitle>Gender: {cardData.gender}</CardSubtitle>
                </fieldset>
            </CardBody>
        </Card>
    )
}

export default CharacterCard;