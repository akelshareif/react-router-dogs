import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogData }) => {
    return (
        <div>
            <h1>Dogs Home Page</h1>
            {dogData.map(({ name, src }) => (
                <div key={name}>
                    <h3>{name}</h3>
                    <Link to={`/dogs/${name.toLowerCase()}`}>
                        <img src={src} alt={name} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DogList;
