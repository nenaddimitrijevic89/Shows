import React from 'react';
import Show from './Show/Show';

const Shows = ({ data }) => {
    let shows = null;
    if(data){
        shows = data.map(show => (
            <Show image={show.mediumImage}/>
        ))
    }
    return (
        <div className='row'>
            {shows}
        </div>
    )
};

export default Shows;