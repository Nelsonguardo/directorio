export const formatoFechas = (date) => {
    
    const d = new Date(date);
    const day = d.getUTCDate();
    const month = d.getUTCMonth() + 1;
    const year = d.getUTCFullYear();

    return `${day}/${month}/${year}`;
}


export const calculaEdad = (date) => {

    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const today = new Date();
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age
}

export const fechaDB = (date) => {
    const d = new Date(date);
    const day = d.getUTCDate();
    const month = d.getUTCMonth() + 1;
    const year = d.getUTCFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export const FechaActualFormatoISO = () => {

    const currentDate = new Date(); 
    currentDate.setHours(0, 0, 0, 0);
    const currentDateISOString = currentDate.toISOString();

    return currentDateISOString;

}
