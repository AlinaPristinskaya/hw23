import React, {useState } from 'react';
import api from '../api';

const CarDelete = () => {
    
    const [cars, setCars] = useState([]);

    const fetchCarDelete = async () => {
        try {
            const response = await api.delete('/cars/delete-cars');
            setCars(response.data);
        } catch (error) {
            console.error('Failed to fetch cars', error);
        }
    };

    

    return (
        <form onClick={fetchCarDelete}>
        <button type="submit">Delete Car</button>
    </form>
    );
};

export default CarDelete;