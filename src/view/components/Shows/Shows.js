import React from 'react';

const Shows = ({ data }) => {
    let shows = null;
    console.log(data)
    if(data){
        shows = data.map(show => (
            <div className='col-4'>
                <img src={show.mediumImage} />
            </div>
        ))
    }
    return (
        <div className='row'>
            {shows}
        </div>
    )
};

export default Shows;