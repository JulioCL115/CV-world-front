function validation(loginInfo, targetName) {
    const errors = {};

    if (targetName === 'all') {
        Object.keys(loginInfo).forEach(key => {
            if (!loginInfo[key]) {
                errors[key] = 'Este campo es obligatorio';
                return errors;
            }
        })
    }

    if (!loginInfo[targetName]) {
        errors[targetName] = 'Este campo es obligatorio';
        return errors;
    }

}

export default validation;
