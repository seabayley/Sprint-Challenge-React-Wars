import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

function CharacterCardWrapper(props) {
    const [wrapperData, setWrapperData] = useState(props.data);
    return (
        <div className='card_container'>
            {wrapperData.map((card, index) => {
                return <CharacterCard entry={card} key={index} />
            })}
        </div>
    )
}

export default CharacterCardWrapper;