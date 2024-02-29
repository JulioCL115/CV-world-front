const regexName = /^[a-zA-Z\p{L}' ]+$/u;
const regexLocation = /^[a-zA-Z\p{L}', ]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^[0-9\s\-\(\)]+$/;  
const regexWebsite = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

function validation(cv, targetName, errors) {

    if (targetName === 'all') {
        // Perform validation on all fields
        const fieldsToCheck = [
            'category', 'language', 'name', 'header', 'description',
            'contact.location', 'contact.email', 'contact.phone', 'contact.website'
        ];

        fieldsToCheck.forEach(field => {
            let fieldValue;
            if (field.includes('.')) {
                // Split the field name by the dot and access the nested property
                const [parent, child] = field.split('.');
                fieldValue = cv[parent][child];
            } else {
                fieldValue = cv[field];
            }

            if (!fieldValue) {
                const fieldName = field.includes('.') ? field.split('.')[1] : field;
                if (field.includes('.')) {
                    // If the field is nested, set the error on the nested property
                    errors.contact[fieldName] = 'Este campo es obligatorio';
                } else {
                    // If the field is not nested, set the error on the top-level property
                    errors[fieldName] = 'Este campo es obligatorio';
                }
            }
        });

        // Return the updated errors object
        return errors;
    }

        if (targetName === 'location' || targetName === 'email' || targetName === 'phone' || targetName === 'website') {
            if (!cv.contact[targetName] || cv.contact[targetName].length === 0) {
                errors.contact[targetName] = 'Este campo es obligatorio';
                return errors;
            }
        } // Add closing curly brace here
        else {
            if (!cv[targetName]) {
                errors[targetName] = 'Este campo es obligatorio';
                return errors;
            }
        }

        if (targetName === 'category') {
            if (!cv.category) {
                errors.category = 'Este campo es obligatorio';
            } else {
                errors.category = null;
            }
        }

        if (targetName === 'language') {
            if (!cv.category) {
                errors.language = 'Este campo es obligatorio';
            } else {
                errors.language = null;
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
            if (regexPhone.test(cv.contact.phone) && (cv.contact.phone.length >= 10 && cv.contact.phone.length <= 15)) {
                errors.contact.phone = null;
            } else {
                errors.contact.phone = 'No puede contener letras, y debe tener entre 10 y 15 caracteres';
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

