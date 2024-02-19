const regexName = /^[a-zA-Z\p{L}' ]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/;

function validation(registerInfo, targetName) {
    const errors = {};

    if (!registerInfo[targetName]) {
        errors[targetName] = 'Este campo es obligatorio';
        return errors;
    }

    if (targetName === 'name') {
        if (regexName.test(registerInfo.name)) {
            errors.name = null;
        } else {
            errors.name = 'Sólo puede contener letras';
        }
    }

    if (targetName === 'email') {
        if (regexEmail.test(registerInfo.email)) {
            errors.email = null;
        } else {
            errors.email = 'No es una dirección de correo electrónico válida';
        }
    }

    if (targetName === 'password') {
        if (passwordRegex.test(registerInfo.password)) {
            errors.password = null;
        } else {
            errors.password = 'La contraseña debe contener al menos un número, un carácter especial y una letra mayúscula, y tener al menos 8 caracteres';
        }
    }

    if (targetName === 'repeatPassword') {
        if (registerInfo.repeatPassword === registerInfo.password) {
            errors.repeatPassword = null;
        } else {
            errors.repeatPassword = 'Las contraseñas no coinciden';
        }
    }

    return errors;
}

export default validation;
