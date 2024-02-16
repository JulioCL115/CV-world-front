import styles from "./CreateCv.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import postCv from "../redux/actions/cvs/postCv";
import validation from "./createCvValidation"


function CreateCv() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storedUser = localStorage.getItem('currentUser');
    const languages = useSelector((state) => state.languages.allLanguages);
    const categories = useSelector((state) => state.categories.allCategories);

    const userId = JSON.parse(storedUser).id;


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

    // Seteo de estado de creacion del formulario

    const [creationStatus, setCreationStatus] = useState({
        status: null,
        message: null
    })

    // Seteo de errores

    const [errors, setErrors] = useState({
        name: null,
        image: null,
        description: null,
        experience: null,
        education: null,
        contact: {
            location: null,
            email: null,
            phone: null,
            website: null
        },
        skills: null,
        speakingLanguages: null,
        otherInterests: null
    });

    // Para inputs normales

    const handleChange = (event) => {
        setCv({
            ...cv,
            [event.target.name]: event.target.value
        });

        const validationErrors = validation({
            ...cv,
            [event.target.name]: event.target.value,
        }, event.target.name);

        setErrors({
            ...errors,
            [event.target.name]: validationErrors[event.target.name]
        }
        );
    };

    // Para añadir una imagen 

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

    // Para añadir o eliminar experiencia laboral

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

    // Para añadir o eliminar educación

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
                    institution: "",
                    title: ""
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

    // Para añadir o eliminar idiomas

    const handleAddLanguage = () => {
        setCv({
            ...cv,
            speakingLanguages: [...cv.speakingLanguages, ""],
        });
    };

    const handleRemoveLanguage = (index) => {
        const updatedLanguages = [...cv.speakingLanguages];
        updatedLanguages.splice(index, 1);

        setCv({
            ...cv,
            speakingLanguages: updatedLanguages,
        });
    };

    // Para añadir o eliminar habilidades

    const handleAddSkill = () => {
        setCv({
            ...cv,
            skills: [...cv.skills, ""],
        });
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...cv.skills];
        updatedSkills.splice(index, 1);

        setCv({
            ...cv,
            skills: updatedSkills,
        });
    };

    // Para añadir o eliminar otros intereses

    const handleAddInterest = () => {
        setCv({
            ...cv,
            otherInterests: [...cv.otherInterests, ""],
        });
    };

    const handleRemoveInterest = (index) => {
        const updatedInterests = [...cv.otherInterests];
        updatedInterests.splice(index, 1);

        setCv({
            ...cv,
            otherInterests: updatedInterests,
        });
    };

    // Para enviar el formulario 

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postCv(userId, cv));


        if (cv.name &&
            cv.header &&
            cv.description &&
            cv.experience &&
            cv.education &&
            cv.contact &&
            cv.skills &&
            cv.speakingLanguages &&
            cv.otherInterests &&
            !errors.name &&
            !errors.header &&
            !errors.description &&
            !errors.experience &&
            !errors.education &&
            !errors.contact &&
            !errors.skills &&
            !errors.speakingLanguages &&
            !errors.otherInterests) {

            const creationStatus = dispatch(postCv(cv));

            setCreationStatus({ ...creationStatus })

            if (creationStatus.status === "Success") {

                setTimeout(() => {
                    navigate("/mycvs");
                }, 2000);
            }
        };
    };

    return (
        <div className={styles.createCv}>
            <h1 className={styles.txtSemiBold32Black}>Crear CV</h1>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué categoría pondrías tu CV?</label>
                    <select className={styles.input}>
                        <option></option>
                        {categories.map((category) => {
                            return <option key={category.id}>{category.name}</option>

                        })}
                    </select>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué idioma vas a escribir tu CV?</label>
                    <select className={styles.input}>
                        <option></option>
                        {languages.map((language) => {
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
                    {errors.name ? <p className={styles.txtError}>{errors.name}</p> : null}
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Imagen:</label>
                    <input
                        className={styles.input}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    {errors.image ? <p className={styles.txtError}>{errors.image}</p> : null}
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
                    {errors.header ? <p className={styles.txtError}>{errors.header}</p> : null}
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
                        {errors.contact.location ? <p className={styles.txtError}>{errors.contact.location}</p> : null}
                        <input
                            className={styles.input}
                            name='email'
                            type='text'
                            placeholder='Ingrese su mail...'
                            onChange={handleChange}
                            value={cv.contact.email} />
                        {errors.contact.email ? <p className={styles.txtError}>{errors.contact.email}</p> : null}
                        <input
                            className={styles.input}
                            name='phone'
                            type='text'
                            placeholder='Ingrese su número de celular...'
                            onChange={handleChange}
                            value={cv.contact.phone} />
                        {errors.contact.phone ? <p className={styles.txtError}>{errors.contact.phone}</p> : null}
                        <input
                            className={styles.input}
                            name='website'
                            type='text'
                            placeholder='Ingrese el link a su página web...'
                            onChange={handleChange}
                            value={cv.contact.website} />
                        {errors.contact.website ? <p className={styles.txtError}>{errors.contact.website}</p> : null}
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
                    {errors.description ? <p className={styles.txtError}>{errors.description}</p> : null}
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Experiencia Laboral:</label>
                    <div className={styles.containerSubSection}>
                        {cv.experience.map((exp, index) => (
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
                                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Puesto:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="role"
                                        value={exp.role}
                                        onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Responsabilidades:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="responsibilities"
                                        value={exp.responsibilities}
                                        onChange={(e) => handleExperienceChange(index, "responsibilities", e.target.value)}
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
                                name="institution"
                                value={educ.where}
                                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                            />
                            <label>Titulo obtenido:</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="title"
                                value={educ.abou}
                                onChange={(e) => handleEducationChange(index, "title", e.target.value)}
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
                    <label className={styles.txtSemiBold16Purple}>Idiomas:</label>
                    {cv.speakingLanguages.map((language, index) => (
                        <div key={index}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={`Idioma ${index + 1}`}
                                value={language}
                                onChange={(e) => {
                                    const updatedLanguages = [...cv.speakingLanguages];
                                    updatedLanguages[index] = e.target.value;

                                    setCv({
                                        ...cv,
                                        speakingLanguages: updatedLanguages,
                                    });
                                }}
                            />
                            <button
                                className={styles.btnSection}
                                type="button"
                                onClick={() => handleRemoveLanguage(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnSection}
                        type="button"
                        onClick={handleAddLanguage}
                    >
                        Agregar
                    </button>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Habilidades:</label>
                    {cv.skills.map((skill, index) => (
                        <div key={index}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={`Habilidad ${index + 1}`}
                                value={skill}
                                onChange={(e) => {
                                    const updatedSkills = [...cv.skills];
                                    updatedSkills[index] = e.target.value;

                                    setCv({
                                        ...cv,
                                        skills: updatedSkills,
                                    });
                                }}
                            />
                            <button
                                className={styles.btnSection}
                                type="button"
                                onClick={() => handleRemoveSkill(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnSection}
                        type="button"
                        onClick={handleAddSkill}
                    >
                        Agregar
                    </button>
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>Otros intereses:</label>
                    {cv.otherInterests.map((interest, index) => (
                        <div key={index}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={`Interés ${index + 1}`}
                                value={interest}
                                onChange={(e) => {
                                    const updatedInterests = [...cv.otherInterests];
                                    updatedInterests[index] = e.target.value;

                                    setCv({
                                        ...cv,
                                        otherInterests: updatedInterests,
                                    });
                                }}
                            />
                            <button
                                className={styles.btnSection}
                                type="button"
                                onClick={() => handleRemoveInterest(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnSection}
                        type="button"
                        onClick={handleAddInterest}
                    >
                        Agregar
                    </button>
                </div>
                <button className={styles.btn} type="submit">Crear</button>
            </form>
        </div>
    )
};

export default CreateCv;
