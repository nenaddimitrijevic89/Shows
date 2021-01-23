import React from 'react';

const Show = ({ image }) => {
    return(
        <div className='col-3'>
            <img src={image} />
        </div>
    )
};

export default Show;