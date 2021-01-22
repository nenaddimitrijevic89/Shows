import React from 'react';

const Show = ({ image }) => {
    return(
        <div className='col-4'>
            <img src={image} />
        </div>
    )
};

export default Show;