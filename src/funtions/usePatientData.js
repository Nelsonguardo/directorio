import { useState, useEffect } from 'react';

const usePatientData = (setModal) => {

    const [patientId, setPatientId] = useState(null);
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        fetchPatientData();
    }, []);

    const fetchPatientData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/patients');
            if (!response.ok) {
                throw new Error('Error al obtener datos de pacientes');
            }
            const data = await response.json();
            setPatientData(data);
        } catch (error) {
            console.error('Error al obtener datos de pacientes:', error);
        }
    };

    const openModal = (id) => {
        setPatientId(id);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };
    return { patientId, patientData, openModal, closeModal, fetchPatientData };
};

export default usePatientData;
