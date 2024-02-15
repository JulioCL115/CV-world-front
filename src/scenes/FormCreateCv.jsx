import styles from "./FormCreateCv.module.css";

import { useState } from "react";
import { useDispatch } from 'react-redux';

import postCv from "../redux/actions/cvs/postCv";

function FormCreateCv() {
    const dispatch = useDispatch();
    const storedUser = localStorage.getItem('currentUser');

    const userId = JSON.parse(storedUser).id;


    const [cv, setCv] = useState({
        name: "",
        image: "",
        header: "",
        description: "",
        experience: [],
        education: [],
        contact: [],
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

    const handleEducationChange = (index, name, value) => {
        const updatedEducation = [...cv.education];
        updatedEducation[index][name] = value;

        // If "to" date is set to "Present", clear the "to" value
        if (name === "to" && value === "Present") {
            updatedEducation[index].to = "";
        }

        setCv({
            ...cv,
            education: updatedEducation
        });
    };

    const handleAddEducation = () => {
        setCv({
            ...cv,
            education: [
                ...cv.education,
                {
                    from: "",
                    to: "",
                    where: "",
                    about: ""
                }
            ]
        });
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = [...cv.education];
        updatedEducation.splice(index, 1);

        setCv({
            ...cv,
            education: updatedEducation
        });
    };

    const handleContactChange = (index, name, value) => {
        const updatedContact = [...cv.contact];
        updatedContact[index][name] = value;

        setCv({
            ...cv,
            contact: updatedContact
        });
    };

    const handleAddContact = () => {
        setCv({
            ...cv,
            contact: [
                ...cv.contact,
                {
                    direccion: "",
                    telefono: "",
                    correo: ""
                }
            ]
        });
    };

    const handleRemoveContact = (index) => {
        const updatedContact = [...cv.contact];
        updatedContact.splice(index, 1);

        setCv({
            ...cv,
            contact: updatedContact
        });
    };

    const formatDateRange = (from, to) => {
        if (!from && !to) return "";
        if (from && !to) return `${from} - Present`;
        return `${from} - ${to}`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postCv(userId, cv));
    };

    return (
        <div className={styles.Container}>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.FormDer}>
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
                <label className='form-txt'>Sobre mi:</label>
                <input
                    className='form-input'
                    name='description'
                    type='text'
                    placeholder='Escribí sobre vos'
                    onChange={handleChange}
                    value={cv.description}
                />
                <label className='form-txt'>Otros intereses:</label>
                <input
                    className='form-input'
                    name='otherInterests'
                    type='text'
                    placeholder='Escribí otros intereses'
                    onChange={handleChange}
                    value={cv.otherInterests}
                />
                <label className='form-txt'> Informacion de Contacto </label>
                {cv.contact.map((cont, index) => (
                    <div key={index}>
                        <label>Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            value={cont.direccion}
                            onChange={(e) => handleContactChange(index, e.target.name, e.target.value)}
                        />
                        <label>Telefono</label>
                        <input
                            type="number"
                            name="telefono"
                            value={cont.telefono}
                            onChange={(e) => handleContactChange(index, e.target.name, e.target.value)}
                        />
                        <label>correo</label>
                        <input
                            type="text"
                            name="correo"
                            value={cont.correo}
                            onChange={(e) => handleContactChange(index, e.target.name, e.target.value)}
                        />
                        <button type="button" onClick={() => handleRemoveContact(index)}>
                           Remove 
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddContact}>
                    Agregar
                </button>
            </div>   
            
            <div className={styles.FormIzq}>
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
                <label className='form-txt'>Educación:</label>
                {cv.education.map((educ, index) => (
                    <div key={index}>
                        <label>Desde:</label>
                        <input
                            type="month"
                            name="from"
                            value={educ.from}
                            onChange={(e) => handleEducationChange(index, "from", e.target.value)}
                        />
                        <label>Hasta:</label>
                        <select
                            name="to"
                            value={educ.to}
                            onChange={(e) => handleEducationChange(index, "to", e.target.value)}
                        >
                            <option value="">Seleccionar fecha</option>
                            <option value="Present">Presente</option>
                        </select>
                        <label>Instituto:</label>
                        <input
                            type="text"
                            name="where"
                            value={educ.where}
                            onChange={(e) => handleEducationChange(index, e)}
                        />
                        <label>Titulo obtenido:</label>
                        <input
                            type="text"
                            name="about"
                            value={educ.abou}
                            onChange={(e) => handleEducationChange(index, e)}
                        />
                        <button type="button" onClick={() => handleRemoveEducation(index)}>
                            Remove
                        </button>
                        
                    </div>
                ))}
                <button type="button" onClick={handleAddEducation}>
                    Agregar
                </button>
            </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
};

export default FormCreateCv;
