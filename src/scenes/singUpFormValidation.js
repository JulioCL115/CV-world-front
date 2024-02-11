const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{8,}$/;

function validation() {
    const errors = {}

    if (regexEmail.test(registerInfo.email)) {
        errors.email = "";
    } else {
        errors.email = "No es una dirección de mail válida"
    }; 

    if (passwordRegex.test(registerInfo.password)) {
        errors.password = "";
    } else {
        errors.password = "La contraseña debe contener al menos un número, un carácter especial y una letra mayúscula, y tener al menos 8 caracteres";
    };

    if (registerInfo.repeatPassword === registerInfo.password) {
        errors.repeatPassword = "";
    } else {
        errors.repeatPassword = "Las contraseñas no coinciden"
    };

    return errors;
};

export default validation; 