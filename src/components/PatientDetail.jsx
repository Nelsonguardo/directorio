import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PatientDetail.css';
import React from 'react';
import { fechaDB } from '../helpers/formatoFechas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { primerasMayusculas } from '../helpers/formatoTextos';
import meidicoData from '../data/medico';
import usePatientDetail from '../funtions/UsePatientDetail';

const DetallePaciente = ({ modal, setModal, patientId, closeModal, fetchPatientData }) => {

    const { patientData, readOnlyFields, handleEditClick, handleGuardarClick } = usePatientDetail(patientId, fetchPatientData);

    const handleCloseModal = () => {
        setModal(false);
        closeModal();
    };

    return (
        <>
            {modal && patientData && (
                <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Información Pacientes</h5>
                                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleGuardarClick}>
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Nombre</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control custom-text-color"
                                                    defaultValue={primerasMayusculas(patientData.name) || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                                                <input
                                                    type="date"
                                                    id="birthDate"
                                                    name="birthDate"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={fechaDB(patientData.birthDate) || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="edad">Edad</label>
                                                <input
                                                    type="text"
                                                    id="edad"
                                                    name="edad"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={patientData.age || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="type">Tipo de Identificación</label>
                                                <select
                                                    id="type"
                                                    name="type"
                                                    required
                                                    className="form-control custom-text-color"
                                                    defaultValue={patientData.type || ''}
                                                    readOnly={readOnlyFields}
                                                >
                                                    <option value="">Identificación Desconocido</option>
                                                    <option value="CC">Cédula de Ciudadanía</option>
                                                    <option value="TI">Tarjeta de Identidad</option>
                                                    <option value="P">Pasaporte</option>
                                                    <option value="RCN">Registro Civil</option>
                                                    <option value="CE">Cédula de Extranjería</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="identification">N° de Identificación</label>
                                                <input
                                                    type="text"
                                                    id="identification"
                                                    name="identification"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={patientData.identification || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="mobile">
                                                    Celular
                                                    <button type="button" className="btn btn-link edit-button" onClick={handleEditClick}>
                                                        <FontAwesomeIcon icon={faPenToSquare} className='icon-color' />
                                                    </button>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="mobile"
                                                    name="mobile"
                                                    required
                                                    className="form-control custom-text-color margin-top"
                                                    defaultValue={patientData.mobile || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Teléfono</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={patientData.phone || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="address">Dirección</label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={primerasMayusculas(patientData.address) || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="occupation">Ocupación</label>
                                                <input
                                                    type="text"
                                                    id="occupation"
                                                    name="occupation"
                                                    required
                                                    className="form-control  custom-text-color"
                                                    defaultValue={primerasMayusculas(patientData.occupation) || ''}
                                                    readOnly={readOnlyFields}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="remarks">Observaciones:</label>
                                                <div className="textarea">
                                                    <textarea
                                                        id="remarks"
                                                        name="remarks"
                                                        rows="4"
                                                        className="form-control  custom-text-color"
                                                        placeholder='Observación'
                                                    ></textarea>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="button">Guardar</button>
                                    </div>
                                    <div>
                                        {patientData.remarks && (
                                            <>
                                                <div className='medic-div'>
                                                    <label htmlFor="medic">{meidicoData[0].nombre}</label>
                                                    <svg  width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.39478 4C0.842491 4 0.394775 4.44772 0.394775 5C0.394775 5.55228 0.842491 6 1.39478 6V4ZM17.5 6C18.0523 6 18.5 5.55228 18.5 5C18.5 4.44772 18.0523 4 17.5 4V6ZM8.43425 9C8.43425 8.44772 7.98653 8 7.43425 8C6.88196 8 6.43425 8.44772 6.43425 9H8.43425ZM6.43425 15C6.43425 15.5523 6.88196 16 7.43425 16C7.98653 16 8.43425 15.5523 8.43425 15H6.43425ZM12.4606 9C12.4606 8.44772 12.0128 8 11.4606 8C10.9083 8 10.4606 8.44772 10.4606 9H12.4606ZM10.4606 15C10.4606 15.5523 10.9083 16 11.4606 16C12.0128 16 12.4606 15.5523 12.4606 15H10.4606ZM3.39785 4.91641C3.35169 4.36606 2.86812 3.95734 2.31777 4.0035C1.76741 4.04966 1.35869 4.53324 1.40485 5.08359L3.39785 4.91641ZM3.40793 17H4.40793C4.40793 16.9721 4.40677 16.9442 4.40443 16.9164L3.40793 17ZM15.4869 17L14.4904 16.9164C14.488 16.9442 14.4869 16.9721 14.4869 17H15.4869ZM17.49 5.08359C17.5361 4.53324 17.1274 4.04966 16.577 4.0035C16.0267 3.95734 15.5431 4.36606 15.497 4.91641L17.49 5.08359ZM5.42767 5C5.42767 5.55229 5.87538 6 6.42767 6C6.97995 6 7.42767 5.55229 7.42767 5H5.42767ZM7.43425 1V0V1ZM11.4606 1V0V1ZM11.4671 5C11.4671 5.55229 11.9149 6 12.4671 6C13.0194 6 13.4671 5.55229 13.4671 5H11.4671ZM1.39478 6H17.5V4H1.39478V6ZM6.43425 9V15H8.43425V9H6.43425ZM10.4606 9V15H12.4606V9H10.4606ZM1.40485 5.08359L2.41143 17.0836L4.40443 16.9164L3.39785 4.91641L1.40485 5.08359ZM2.40793 17C2.40793 17.7978 2.72699 18.5615 3.29279 19.1236L4.70236 17.7048C4.51307 17.5167 4.40793 17.2631 4.40793 17H2.40793ZM3.29279 19.1236C3.85836 19.6855 4.62406 20 5.42109 20V18C5.15028 18 4.89186 17.8931 4.70236 17.7048L3.29279 19.1236ZM5.42109 20H13.4737V18H5.42109V20ZM13.4737 20C14.2708 20 15.0364 19.6855 15.602 19.1236L14.1925 17.7048C14.0029 17.8931 13.7445 18 13.4737 18V20ZM15.602 19.1236C16.1678 18.5615 16.4869 17.7978 16.4869 17H14.4869C14.4869 17.2631 14.3817 17.5167 14.1925 17.7048L15.602 19.1236ZM16.4834 17.0836L17.49 5.08359L15.497 4.91641L14.4904 16.9164L16.4834 17.0836ZM7.42767 5V2H5.42767V5H7.42767ZM7.42767 2C7.42767 2.00212 7.42676 2.00283 7.42727 2.00231L6.0177 0.583472C5.64068 0.958033 5.42767 1.46744 5.42767 2H7.42767ZM7.42727 2.00231C7.42801 2.00158 7.4304 2 7.43425 2V0C6.90418 0 6.39451 0.209132 6.0177 0.583472L7.42727 2.00231ZM7.43425 2H11.4606V0H7.43425V2ZM11.4606 2C11.4644 2 11.4668 2.00158 11.4675 2.00231L12.8771 0.583472C12.5003 0.209132 11.9906 0 11.4606 0V2ZM11.4675 2.00231C11.4681 2.00283 11.4671 2.00212 11.4671 2H13.4671C13.4671 1.46744 13.2541 0.958033 12.8771 0.583472L11.4675 2.00231ZM11.4671 2V5H13.4671V2H11.4671Z" fill="#FF3B3B" />
                                                    </svg>

                                                </div>
                                                <label htmlFor="especialty" className="especialty-label">{meidicoData[0].especialidad}</label>
                                                <label htmlFor="remarks-label" className="remarks-label">{patientData.remarks}</label>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DetallePaciente;
