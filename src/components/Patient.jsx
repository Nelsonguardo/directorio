import React, { useState } from 'react';
import usePatientData from '../funtions/usePatientData';
import { formatoFechas } from '../helpers/formatoFechas';
import DetallePaciente from './PatientDetail';
import { primerasMayusculas } from '../helpers/formatoTextos';

const Pacientes = () => {
    const [modal, setModal] = useState(false);
    const { patientId, patientData, openModal, closeModal, fetchPatientData } = usePatientData(setModal);

    return (
        <div className='container'>
            <DetallePaciente patientId={patientId} setModal={setModal} modal={modal} closeModal={closeModal} fetchPatientData={fetchPatientData} />
            <div className="table-container">
                <h1 className="title">Directorio de Pacientes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Paciente</th>
                            <th>Identificación</th>
                            <th>Celular</th>
                            <th>Entidad</th>
                            <th>Ultima Atención</th>
                            <th>Tipo de Atención</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {patientData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <button className="Action" onClick={() => openModal(item.id)}>{primerasMayusculas(item.name)}</button>
                                </td>
                                <td>{`${item.type.toUpperCase()}-${item.identification}`}</td>
                                <td>{item.mobile}</td>
                                <td>{primerasMayusculas(item.entity)}</td>
                                <td>{formatoFechas(item.lastAttention)}</td>
                                <td>{primerasMayusculas(item.attentionType)}</td>
                                <td>
                                    <span
                                        className={`estado estado-${item.status.toLowerCase()}`}
                                    >
                                        {primerasMayusculas(item.status)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pacientes;
