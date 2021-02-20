import React from 'react';

import './Show.css';

const Show = ({ image }) => {
    // const pageNumbers = Array.from(new Array(pages)).map((_, index)=>index+1);
    return(
        <div className='col-lg-6 col-sm-12 show'>
            <img src={image} alt='poster'/>
        </div>
    )
};

export default Show;