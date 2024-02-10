import styles from "./FormCreateCv.module.css";

import { useState } from "react";
import { useDispatch } from 'react-redux';

import postCv from "../redux/actions/csv/postCv";

function FormCreateCv() {
    const dispatch = useDispatch();

    const [cv, setCv] = useState({
        name: "",
        image: "",
        header: "",
        description: "",
        experience: [],
        education: [],
        contact: {},
        skills: [],
        speakingLanguages: [],
        otherInterests: []
    });

    const handleChange = (event) => {
        setCv({
            ...cv,
            [event.target.name]: event.target.value
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        // Check if a file is selected
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setCv({
                    ...cv,
                    image: reader.result // Set the image data as a base64 string
                });
            };

            reader.readAsDataURL(file); // Read the image as a data URL
        }
    };

    const handleExperienceChange = (index, name, value) => {
        const updatedExperience = [...cv.experience];
        updatedExperience[index][name] = value;

        // If "to" date is set to "Present", clear the "to" value
        if (name === "to" && value === "Present") {
            updatedExperience[index].to = "";
        }

        setCv({
            ...cv,
            experience: updatedExperience
        });
    };

    const handleAddExperience = () => {
        setCv({
            ...cv,
            experience: [
                ...cv.experience,
                {
                    from: "",
                    to: "",
                    company: "",
                    role: "",
                    responsibilities: ""
                }
            ]
        });
    };

    const handleRemoveExperience = (index) => {
        const updatedExperience = [...cv.experience];
        updatedExperience.splice(index, 1);

        setCv({
            ...cv,
            experience: updatedExperience
        });
    };

    const formatDateRange = (from, to) => {
        if (!from && !to) return "";
        if (from && !to) return `${from} - Present`;
        return `${from} - ${to}`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postCv(cv));
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className='form-txt'>Nombre y Apellido:</label>
                <input
                    className='form-input'
                    name='name'
                    type='text'
                    placeholder='Ingrese su nombre y apellido...'
                    onChange={handleChange}
                    value={cv.name}
                />
                <label className='form-txt'>Imagen:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <label className='form-txt'>Encabezado:</label>
                <input
                    className='form-input'
                    name='header'
                    type='text'
                    placeholder='Ingrese un encabezado...'
                    onChange={handleChange}
                    value={cv.header}
                />
                <label className='form-txt'>Descripción:</label>
                <input
                    className='form-input'
                    name='description'
                    type='text'
                    placeholder='Escribí una breve descripción'
                    onChange={handleChange}
                    value={cv.description}
                />
                <label className='form-txt'>Experiencia Laboral:</label>
                {cv.experience.map((exp, index) => (
                    <div key={index}>
                        <label>Desde:</label>
                        <input
                            type="month"
                            name="from"
                            value={exp.from}
                            onChange={(e) => handleExperienceChange(index, "from", e.target.value)}
                        />
                        <label>Hasta:</label>
                        <select
                            name="to"
                            value={exp.to}
                            onChange={(e) => handleExperienceChange(index, "to", e.target.value)}
                        >
                            <option value="">Seleccionar fecha</option>
                            <option value="Present">Presente</option>
                        </select>
                        <label>Empresa:</label>
                        <input
                            type="text"
                            name="company"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, e)}
                        />
                        <label>Puesto:</label>
                        <input
                            type="text"
                            name="role"
                            value={exp.role}
                            onChange={(e) => handleExperienceChange(index, e)}
                        />
                        <label>Responsabilidades:</label>
                        <input
                            type="text"
                            name="responsibilities"
                            value={exp.responsibilities}
                            onChange={(e) => handleExperienceChange(index, e)}
                        />
                        <button type="button" onClick={() => handleRemoveExperience(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddExperience}>
                    Agregar
                </button>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
};

export default FormCreateCv;
