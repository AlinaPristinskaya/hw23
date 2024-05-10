// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const CarAdd = () => {
    
    const [cars, setCars] = useState([]);

    const fetchCarAdd = async () => {
        try {
            const response = await api.post('/cars/add');
            setCars(response.data);
        } catch (error) {
            console.error('Failed to fetch cars', error);
        }
    };

    

    return (
        <form onClick={fetchCarAdd}>
        <button type="submit">'Add Car</button>
    </form>
    );
};

export default CarAdd;
