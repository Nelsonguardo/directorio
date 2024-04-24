import { useState, useEffect } from 'react';
import { calculaEdad, FechaActualFormatoDB } from '../helpers/formatoFechas';

const usePatientDetail = (patientId, fetchPatientData) => {

    const [patientData, setPatientData] = useState(null);
    const [readOnlyFields, setReadOnlyFields] = useState(true);

    useEffect(() => {
        setPatientData(null);
        if (patientId) {
            const fetchPatient = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/api/patients/${patientId}`);
                    if (!response.ok) {
                        throw new Error('Error al obtener datos del paciente');
                    }
                    const data = await response.json();
                    setPatientData({ ...data, age: calculaEdad(data.birthDate) });
                } catch (error) {
                    console.error('Error al obtener datos del paciente:', error);
                }
            };
            fetchPatient();
        }
    }, [patientId]);


    const handleEditClick = () => {
        setReadOnlyFields(false);
    };

    const handleGuardarClick = async (e) => {
        e.preventDefault();
        const newData = new FormData(e.target);
        const userData = {
            name: newData.get('name'),
            phone: newData.get('phone'),
            birthDate: newData.get('birthDate'),
            type: newData.get('type'),
            identification: newData.get('identification'),
            mobile: newData.get('mobile'),
            address: newData.get('address'),
            occupation: newData.get('occupation'),
            remarks: newData.get('remarks'),
            lastAttention: FechaActualFormatoDB(),
            checkinDate: FechaActualFormatoDB()
        };

        try {
            const response = await fetch(`http://localhost:3001/api/patients/${patientId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar datos del paciente');
            }
            const updatedData = await response.json();
            e.target.reset();
            setPatientData({ ...updatedData, age: calculaEdad(updatedData.birthDate) });
            setReadOnlyFields(true);
            fetchPatientData();
        } catch (error) {
            console.error('Error al actualizar datos del paciente:', error);
        }
    };
    return { patientData, readOnlyFields, handleEditClick, handleGuardarClick };
};

export default usePatientDetail;
