import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.filter((d) => d.name.toLowerCase() === name)[0];
    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <h3>{dog.name}'s Info</h3>
            <h5>Age: {dog.age}</h5>
            <h5>Facts: </h5>
            <ul>
                {dog.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;
