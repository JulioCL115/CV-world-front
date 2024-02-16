const regexName = /^[a-zA-Z\p{L}' ]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^[0-9]{13}$/;
const regexWebsite = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

function validation(cv, targetName) {
    const errors = {};

    if (!cv[targetName]) {
        errors[targetName] = 'Este campo es obligatorio';
        return errors;
    }

    if (targetName === 'name') {
        if (regexName.test(cv.name)) {
            errors.name = null;
        } else {
            errors.name = 'Sólo puede contener letras';
        }
    }

    if (targetName === 'email') {
        if (regexEmail.test(cv.contact.email)) {
            errors.email = null;
        } else {
            errors.email = 'No es una dirección de correo electrónico válida';
        }
    }

    if (targetName === 'phone') {
        if (regexPhone.test(cv.contact.phone)) {
            errors.phone = null;
        } else {
            errors.phone = 'Debe contener código de país y código de área';
        }
    }

    if (targetName === 'website') {
        if (cv.contact.website && !regexWebsite.test(cv.contact.website)) {
            errors.website = 'Ingrese una URL válida';
        } else {
            errors.website = null;
        }
    }
    

    // Validation for header length
    if (targetName === 'header') {
        if (cv.header.length > 50) {
            errors.header = 'El encabezado no puede tener más de 50 caracteres';
        } else {
            errors.header = null;
        }
    }

    // Validation for description length
    if (targetName === 'description') {
        if (cv.description.length > 200) {
            errors.description = 'La descripción no puede tener más de 200 caracteres';
        } else {
            errors.description = null;
        }
    }

    return errors;
}

export default validation;

