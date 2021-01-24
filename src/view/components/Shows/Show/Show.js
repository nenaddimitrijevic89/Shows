import React from 'react';

import './Show.css';

const Show = ({ image }) => {
    return(
        <div className='col-3 show'>
            <img src={image} />
        </div>
    )
};

export default Show;