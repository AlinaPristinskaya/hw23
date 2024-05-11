// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const CarsOld = ({ refresh}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, [refresh]);

    const fetchCars = async () => {
        try {
            const response = await api.get('/cars/old');
            setCars(response.data);
        } catch (error) {
            console.error('Failed to fetch cars', error);
        }
    };


    return (
        <div>
            <h2>Car Old</h2>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>
                        {car.make} {car.model} {car.color}- {car.owner}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarsOld;
