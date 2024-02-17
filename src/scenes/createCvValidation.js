const regexName = /^[a-zA-Z\p{L}' ]+$/u;
const regexLocation = /^[a-zA-Z\p{L}', ]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^[0-9]{13}$/;
const regexWebsite = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

function validation(cv, targetName, errors) {

    console.log(targetName, cv, errors)

    if (targetName === 'location' || targetName === 'email' || targetName === 'phone' || targetName === 'website') {
        if (!cv.contact[targetName] || cv.contact[targetName].length === 0) {
            errors.contact[targetName] = 'Este campo es obligatorio';
            return errors;
        }

    } else if (targetName === 'experience' || targetName === 'education' || targetName === 'skills' || targetName === 'languages' || targetName === 'otherInterests') {
        if (!cv[targetName].length) {
            errors[targetName] = 'Este campo es obligatorio';
            return errors;
        } 
    }

    else {
        if (!cv[targetName]) {
            errors[targetName] = 'Este campo es obligatorio';
            return errors;
        }
    }

    if (targetName === 'name') {
        if (regexName.test(cv.name)) {
            errors.name = null;
        } else {
            errors.name = 'Sólo puede contener letras';
        }
    }

    if (targetName === 'header') {
        if (cv.header.length > 50) {
            errors.header = 'El encabezado no puede tener más de 50 caracteres';
        } else {
            errors.header = null;
        }
    }

    if (targetName === 'location') {
        if (regexLocation.test(cv.contact.location)) {
            errors.contact.location = null;
        } else {
            errors.contact.location = 'Sólo puede contener letras';
        }
    }

    if (targetName === 'email') {
        if (regexEmail.test(cv.contact.email)) {
            errors.contact.email = null;
        } else {
            errors.contact.email = 'No es una dirección de correo electrónico válida';
        }
    }

    if (targetName === 'phone') {
        if (regexPhone.test(cv.contact.phone)) {
            errors.contact.phone = null;
        } else {
            errors.contact.phone = 'Debe contener código de país y código de área';
        }
    }

    if (targetName === 'website') {
        if (cv.contact.website && !regexWebsite.test(cv.contact.website)) {
            errors.contact.website = 'Ingrese una URL válida';
        } else {
            errors.contact.website = null;
        }
    }

    if (targetName === 'description') {
        if (cv.description.length > 600) {
            errors.description = 'La descripción no puede tener más de 600 caracteres';
        } else {
            errors.description = null;
        }
    }



    return errors;
}

export default validation;

