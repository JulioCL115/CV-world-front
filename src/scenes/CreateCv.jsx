import styles from "./CreateCv.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import postCv from "../redux/actions/cvs/postCv";

function CreateCv() {
    const dispatch = useDispatch();
    const storedUser = localStorage.getItem('currentUser');
    const languages = useSelector((state) => state?.languages?.allLanguages);
    const categories = useSelector((state) => state?.categories?.allCategories);
    console.log(categories)
    const userId = JSON.parse(storedUser)?.id;
    

    const [cv, setCv] = useState({
        name: "",
        image: "",
        header: "",
        description: "",
        experience: [],
        education: [],
        contact: {
            location: null,
            email: null,
            phone: null,
            website: null
        },
        skills: [],
        speakingLanguages: [],
        otherInterests: []
    });

    console.log(cv)

    const handleChange = (event) => {
        setCv({
            ...cv,
            [event.target.name]: event.target.value
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setCv({
                    ...cv,
                    image: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleExperienceChange = (index, name, value) => {
        const updatedExperience = [...cv.experience];
        updatedExperience[index][name] = value;

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
        const updatedContact = [cv.contact];
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
      event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', cv.name);
            formData.append('header', cv.header);
            cv.experience.forEach((experience) => {
              formData.append('experience', experience);
            });
            formData.append('description', cv.description);
            cv.education.forEach((education) => {
              formData.append("education", education);
            });
            cv.contact.forEach((contact) => {
                formData.append("contact", contact);
              });
              cv.skills.forEach((skills) => {
                formData.append("skills", skills);
              });
              cv.speakingLanguages.forEach((speakingLanguages) => {
                formData.append("speakingLanguages", speakingLanguages);
              });
              cv.otherInterests.forEach((otherInterests) => {
                formData.append("otherInterests", otherInterests);
              });
    
            const inputFile = document.querySelector("input[name='image']").files;
              for (let i = 0 ; i < inputFile.length; i++){
              formData.append('image', inputFile[i]);
            }
    
            for (let [key, value] of formData.entries()) {
              console.log(`${key}: ${value}`);
            }
            console.log(cv.image)
            console.log(formData)
            console.log(inputFile)
            dispatch(postCv(userId,formData));        
    }catch(error){

    }
};

    return (
        <div className={styles.createCv}>
            <h1 >Crear CV</h1>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué categoría pondrías tu CV?</label>
                    <select className={styles.input}>
                        <option></option>
                        {categories?.map((category) => {
                            return <option key={category.id}>{category.name}</option>

                        })}
                    </select>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué idioma vas a escribir tu CV?</label>
                    <select className={styles.input}>
                        <option></option>
                        {languages?.map((language) => {
                            return <option key={language.id}>{language.name}</option>

                        })}
                    </select>
                </div>


                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Nombre y Apellido:</label>
                    <input
                        className={styles.input}
                        name='name'
                        type='text'
                        placeholder='Ingrese su nombre y apellido...'
                        onChange={handleChange}
                        value={cv.name}
                    />
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Imagen:</label>
                    <input
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Encabezado:</label>
                    <input
                        className={styles.input}
                        name='header'
                        type='text'
                        placeholder='Ingrese un encabezado...'
                        onChange={handleChange}
                        value={cv.header}
                    />
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}> Informacion de contacto:</label>
                    <div>
                        <input
                            className={styles.input}
                            name='name'
                            type='text'
                            placeholder='Ingrese su país y ciudad de residencia...'
                            onChange={handleChange}
                            value={cv.contact.location} />
                        <input
                            className={styles.input}
                            name='email'
                            type='text'
                            placeholder='Ingrese su mail...'
                            onChange={handleChange}
                            value={cv.contact.email} />
                        <input
                            className={styles.input}
                            name='phone'
                            type='text'
                            placeholder='Ingrese su número de celular...'
                            onChange={handleChange}
                            value={cv.contact.phone} />
                        <input
                            className={styles.input}
                            name='website'
                            type='text'
                            placeholder='Ingrese el link a su página web...'
                            onChange={handleChange}
                            value={cv.contact.website} />
                    </div>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Sobre mí:</label>
                    <input
                        className={styles.input}
                        name='description'
                        type='text'
                        placeholder='Escribí unos renglones sobre vos...'
                        onChange={handleChange}
                        value={cv.description}
                    />
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Experiencia Laboral:</label>
                    <div className={styles.containerSubSection}>
                        {cv?.experience.map((exp, index) => (
                            <div key={index}>
                                <label>Desde:</label>
                                <div>
                                    <input
                                        className={styles.input}
                                        type="month"
                                        name="from"
                                        value={exp.from}
                                        onChange={(e) => handleExperienceChange(index, "from", e.target.value)}
                                    />
                                    <label>Hasta:</label>
                                    <select
                                        className={styles.input}
                                        name="to"
                                        value={exp.to}
                                        onChange={(e) => handleExperienceChange(index, "to", e.target.value)}
                                    >
                                        <option value="">Seleccionar fecha</option>
                                        <option value="Present">Presente</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Empresa:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="company"
                                        value={exp.company}
                                        onChange={(e) => handleExperienceChange(index, e.target.name, e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Puesto:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="role"
                                        value={exp.role}
                                        onChange={(e) => handleExperienceChange(index, e.target.name, e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Responsabilidades:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="responsibilities"
                                        value={exp.responsibilities}
                                        onChange={(e) => handleExperienceChange(index, e.target.name, e.target.value)}
                                    />
                                </div>
                                <button
                                    className={styles.btnSection}
                                    type="button"
                                    onClick={() => handleRemoveExperience(index)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}
                        <button 
                        className={styles.btnSection}
                        type="button" 
                        onClick={handleAddExperience}>
                            Agregar
                        </button>
                    </div>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Educación:</label>
                    {cv.education.map((educ, index) => (
                        <div key={index}>
                            <label>Desde:</label>
                            <input
                                className={styles.input}
                                type="month"
                                name="from"
                                value={educ.from}
                                onChange={(e) => handleEducationChange(index, "from", e.target.value)}
                            />
                            <label>Hasta:</label>
                            <select
                                className={styles.input}
                                typeof="text"
                                name="to"
                                value={educ.to}
                                onChange={(e) => handleEducationChange(index, "to", e.target.value)}
                            >
                                <option value="">Seleccionar fecha</option>
                                <option value="Present">Presente</option>
                            </select>
                            <label>Instituto:</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="where"
                                value={educ.where}
                                onChange={(e) => handleEducationChange(index, e.target.name, e.target.value)}
                            />
                            <label>Titulo obtenido:</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="about"
                                value={educ.abou}
                                onChange={(e) => handleEducationChange(index, e.target.name, e.target.value)}
                            />
                            <button type="button" onClick={() => handleRemoveEducation(index)}>
                                Eliminar
                            </button>

                        </div>
                    ))}
                    <button
                        className={styles.btnSection}
                        type="button"
                        onClick={handleAddEducation}>
                        Agregar
                    </button>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Otros intereses:</label>
                    <input
                        className='form-input'
                        name='otherInterests'
                        type='text'
                        placeholder='Escribí otros intereses'
                        onChange={handleChange}
                        value={cv.otherInterests}
                    />
                </div>
                <button className={styles.btn} type="submit">Crear</button>
            </form>
        </div>
    )
};

export default CreateCv;
