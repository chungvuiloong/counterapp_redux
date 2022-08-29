import React from 'react';
import './Circle.css'

const Circle = ({ value }) => {
    return (
        <div className="circle"> 
            {value}
        </div>
    );
};

export default Circle;