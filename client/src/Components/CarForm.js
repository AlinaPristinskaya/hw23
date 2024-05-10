
import React, { useState, useEffect } from 'react';
import api from '../api';

const CarForm = ({ carToEdit, setCarToEdit, refreshCars }) => {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        registrationNumber: '',
        owner: '',
        owners:[],
        color:'',
        address:''
    });

    useEffect(() => {
        if (carToEdit) {
            setFormData({
                make: carToEdit.make,
                model: carToEdit.model,
                color: carToEdit.year,
                registrationNumber: carToEdit.registrationNumber,
                owner: carToEdit.owner,
                owners: carToEdit.owners,
                address: carToEdit.address,
            });
        }
    }, [carToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (carToEdit) {
                await api.put(`/cars/${carToEdit._id}`, formData);
            } else {
                await api.post('/cars', formData);
            }
            setFormData({ make: '', model: '', color: '', registrationNumber: '', owner: '' });
            refreshCars();
            setCarToEdit(null);
        } catch (error) {
            console.error('Failed to submit form', error);
        }
    };

    return (
        <div>
        <h2>Add a car to the cars collection</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Make" />
                <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" />
                <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
                <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Registration Number" />
                <input type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner" />
                <input type="text" name="owners" value={formData.owners} onChange={handleChange} placeholder="Owners" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                <button type="submit">{carToEdit ? 'Update Car' : 'Add Car'}</button>
            </form>
        </div>
    );
};

export default CarForm;
