// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const CarList = ({ setCarToEdit }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await api.get('/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Failed to fetch cars', error);
        }
    };

    const deleteCar = async (id) => {
        try {
            await api.delete(`/cars/${id}`);
            fetchCars();  // refresh list after deleting
        } catch (error) {
            console.error('Failed to delete car', error);
        }
    };

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>
                        {car.make} {car.model} {car.color}- {car.owner}
                        <button onClick={() => setCarToEdit(car)}>Edit</button>
                        <button onClick={() => deleteCar(car._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
