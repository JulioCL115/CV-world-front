import styles from './UpdateCv.module.css';

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

import updateCv from '../../redux/actions/cvs/updateCv';
import getAllCategories from "../../redux/actions/categories/getAllCategories";
import getAllLanguages from "../../redux/actions/languages/getAllLanguages";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import validation from "./createCvValidation"


function UpdateCv() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cvId } = useParams();
    const languages = useSelector((state) => state.languages.allLanguages);
    const categories = useSelector((state) => state.categories.allCategories);
    const [loading, setLoading] = useState(true);

    console.log(cvId);

    const [cv, setCv] = useState({
        category: "",
        language: "",
        name: "",
        image: "",
        header: "",
        description: "",
        experience: [],
        education: [],
        contact: {
            location: "",
            email: "",
            phone: "",
            website: ""
        },
        skills: [],
        speakingLanguages: [],
        otherInterests: []
    });

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllLanguages());
        const fetchCvDetail = async () => {
            const cvDetail = await getCvDetail(cvId);

            console.log(cvDetail);

            const mappedExp = cvDetail.experience.map((exp) => {
                return {
                    ...exp,
                    toDate: exp.to,
                    to: exp.to.includes('Presente') ? 'Presente' : 'Seleccionar fecha'
                }
            })

            mappedExp.forEach((exp, index) => {
                if (exp.to === 'Presente') {
                    setShowExperienceDateField([...showExperienceDateField, false]);
                } else {
                    setShowExperienceDateField([...showExperienceDateField, true]);
                }
            });

            const mappedEdu = cvDetail.education.map((edu) => {
                return {
                    ...edu,
                    where: edu.institution,
                    abou: edu.title
                }
            });

            // Update the cv state with the names instead of the objects
            setCv({
                ...cvDetail,
                category: cvDetail.category.name ? cvDetail.category.name : "",
                language: cvDetail.language.name ? cvDetail.language.name : "",
                name: cvDetail.name ? cvDetail.name : "",
                image: cvDetail.image ? cvDetail.image : "",
                header: cvDetail.header ? cvDetail.header : "",
                description: cvDetail.description ? cvDetail.description : "",
                experience: cvDetail.experience ? mappedExp : [],
                education: cvDetail.education ? mappedEdu : [],
                contact: cvDetail.contact ? cvDetail.contact : {
                    location: "",
                    email: "",
                    phone: "",
                    website: ""
                },
                skills: cvDetail.skills ? cvDetail.skills : [],
                speakingLanguages: cvDetail.speakingLanguages ? cvDetail.speakingLanguages : [],
                otherInterests: cvDetail.otherInterests ? cvDetail.otherInterests : []
            });

            setLoading(false);
        };

        fetchCvDetail();
    }, []);

    const [showEducationDateField, setShowEducationDateField] = useState([]);
    const [showExperienceDateField, setShowExperienceDateField] = useState([]);

    // Seteo de estado de creacion del formulario

    const [creationStatus, setCreationStatus] = useState({
        status: null,
        message: null
    })

    // Seteo de errores

    const [errors, setErrors] = useState({
        category: null,
        language: null,
        name: null,
        description: null,
        header: null,
        contact: {
            location: null,
            email: null,
            phone: null,
            website: null
        },
    });

    // Manejo de cambios en el formulario

    const handleChange = (event, contactField) => {
        let cvWithUpdatedValues = { ...cv };

        if (contactField) {
            const contact = {
                ...cvWithUpdatedValues.contact,
                [contactField]: event.target.value
            }

            cvWithUpdatedValues.contact = contact;

            setCv((prevCv) => ({
                ...prevCv,
                contact: cvWithUpdatedValues.contact
            }));
        } else {
            cvWithUpdatedValues = {
                ...cvWithUpdatedValues,
                [event.target.name]: event.target.value
            };

            setCv((prevCv) => ({
                ...prevCv,
                [event.target.name]: event.target.value
            }));
        }

        const validationErrors = validation(
            {
                ...cvWithUpdatedValues,
            },
            event.target.name,
            errors
        );

        setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: validationErrors[event.target.name],
        }));
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

        if (name === 'to') {
            const copyShowExperienceDateField = [...showExperienceDateField];
            if (value === 'Presente') {
                copyShowExperienceDateField.splice(index, 1, false);
                setShowExperienceDateField([...copyShowExperienceDateField]);
            }

            if (value === 'Seleccionar fecha') {
                copyShowExperienceDateField.splice(index, 1, true);
                setShowExperienceDateField([...copyShowExperienceDateField]);
            }
        }

        setCv({
            ...cv,
            experience: updatedExperience
        });
    };

    const handleAddExperience = () => {
        // Agrego al final del array un objeto con los valores por defecto
        setShowExperienceDateField([...showExperienceDateField, false]);

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

        const copyShowExperienceDateField = [...showExperienceDateField];
        copyShowExperienceDateField.splice(index, 1);

        setShowExperienceDateField([...copyShowExperienceDateField]);
        setCv({
            ...cv,
            experience: updatedExperience
        });
    };

    // Para añadir o eliminar educación

    const handleEducationChange = (index, name, value) => {
        const updatedEducation = [...cv.education];
        updatedEducation[index][name] = value;

        if (name === 'to') {
            const copyShowEducationDateField = [...showEducationDateField];
            if (value === 'Seleccionar fecha') {
                copyShowEducationDateField.splice(index, 1, true);
                setShowEducationDateField([...copyShowEducationDateField]);
            }

            if (value === 'Presente') {
                copyShowEducationDateField.splice(index, 1, false);
                setShowEducationDateField([...copyShowEducationDateField]);
            }
        }

        setCv({
            ...cv,
            education: updatedEducation
        });
    };

    const handleAddEducation = () => {
        // Agrego al final del array un objeto con los valores por defecto
        setShowEducationDateField([...showEducationDateField, false]);
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

        const copyShowEducationDateField = [...showEducationDateField];
        copyShowEducationDateField.splice(index, 1);
        setShowEducationDateField([...copyShowEducationDateField]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validation(cv, 'all', errors);
        setErrors(validationErrors);

        if (cv.category &&
            cv.language &&
            cv.name &&
            cv.header &&
            cv.description &&
            cv.contact.location &&
            cv.contact.email &&
            cv.contact.phone &&
            cv.contact.website
        ) {
            if (
                !errors.category &&
                !errors.language &&
                !errors.name &&
                !errors.header &&
                !errors.description &&
                !errors.contact.location &&
                !errors.contact.email &&
                !errors.contact.phone &&
                !errors.contact.website 
              ) {

                const creationStatus = await updateCv(cvId, cv);

                setCreationStatus({ ...creationStatus })

                if (creationStatus.status === "Success") {

                    setTimeout(() => {
                        navigate("/mycvs");
                    }, 2000);
                }
            } else {
                setCreationStatus({
                    status: "Fail",
                    message: "Hay campos mal completados"
                });
            }
        } else {
            setCreationStatus({
                status: "Fail",
                message: "Faltan datos obligatorios"
            });
        }
    };

    return (
        <div className={styles.updateCv}>
            <h1 className={styles.txtSemiBold32Black}>Editar CV</h1>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué categoría pondrías tu CV?</label>{ }
                    <select
                        className={styles.input}
                        name='category'
                        value={cv.category}
                        onChange={handleChange}>
                        <option></option>
                        {categories && categories.map((category) => {
                            return <option key={category.id}>{category.name}</option>

                        })}
                    </select>
                    {errors.category ? <p className={styles.txtError}>{errors.category}</p> : null}
                </div>

                <div className={styles.containerSection}>
                    <label className={styles.txtSemiBold16Purple}>¿En qué idioma vas a escribir tu CV?</label>
                    <select
                        className={styles.input}
                        name='language'
                        value={cv.language}
                        onChange={handleChange}>
                        <option></option>
                        {languages && languages.map((language) => {
                            return <option key={language.id}>{language.name}</option>

                        })}
                    </select>
                    {errors.language ? <p className={styles.txtError}>{errors.language}</p> : null}
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
                        name="image"
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
                            name='location'
                            type='text'
                            placeholder='Ingrese su país y ciudad de residencia...'
                            onChange={(e) => handleChange(e, 'location')}
                            value={cv.contact.location} />
                        {errors.contact.location ? <p className={styles.txtError}>{errors.contact.location}</p> : null}
                        <input
                            className={styles.input}
                            name='email'
                            type='text'
                            placeholder='Ingrese su mail...'
                            onChange={(e) => handleChange(e, 'email')}
                            value={cv.contact.email} />
                        {errors.contact.email ? <p className={styles.txtError}>{errors.contact.email}</p> : null}
                        <input
                            className={styles.input}
                            name='phone'
                            type='text'
                            placeholder='Ingrese su número de celular...'
                            onChange={(e) => handleChange(e, 'phone')}
                            value={cv.contact.phone} />
                        {errors.contact.phone ? <p className={styles.txtError}>{errors.contact.phone}</p> : null}
                        <input
                            className={styles.input}
                            name='website'
                            type='text'
                            placeholder='Ingrese el link a su página web...'
                            onChange={(e) => handleChange(e, 'website')}
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
                                <label className={styles.txtRegular16Purple}>Desde:</label>
                                <div>
                                    <input
                                        className={styles.input}
                                        type="month"
                                        name="from"
                                        value={exp.from}
                                        onChange={(e) => handleExperienceChange(index, "from", e.target.value)}
                                    />
                                    <label className={styles.txtRegular16Purple}>Hasta:</label>

                                    {(showExperienceDateField[index] && showExperienceDateField.length > 0) && (
                                        <input
                                            className={styles.input}
                                            type="month"
                                            name="to"
                                            value={exp.toDate}
                                            onChange={(e) => handleExperienceChange(index, "to", e.target.value)}
                                        />
                                    )}

                                    <select
                                        className={styles.input}
                                        name="to"
                                        value={exp.to}
                                        onChange={(e) => handleExperienceChange(index, "to", e.target.value)}
                                    >
                                        <option value=""></option>
                                        <option value="Seleccionar fecha">Seleccionar fecha</option>
                                        <option value="Present">Presente</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={styles.txtRegular16Purple}>Empresa:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="company"
                                        value={exp.company}
                                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className={styles.txtRegular16Purple}>Puesto:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="role"
                                        value={exp.role}
                                        onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className={styles.txtRegular16Purple}>Responsabilidades:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="responsibilities"
                                        value={exp.responsibilities}
                                        onChange={(e) => handleExperienceChange(index, "responsibilities", e.target.value)}
                                    />
                                </div>
                                <button
                                    className={styles.btnDelete}
                                    type="button"
                                    onClick={() => handleRemoveExperience(index)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}
                        <button
                            className={styles.btnAdd}
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
                            <label className={styles.txtRegular16Purple}>Desde:</label>
                            <input
                                className={styles.input}
                                type="month"
                                name="from"
                                value={educ.from}
                                onChange={(e) => handleEducationChange(index, "from", e.target.value)}
                            />
                            <label className={styles.txtRegular16Purple}>Hasta:</label>

                            {showEducationDateField[index] && showEducationDateField.length > 0 && (
                                <input
                                    className={styles.input}
                                    type="month"
                                    name="to"
                                    value={educ.toDate}
                                    onChange={(e) => handleEducationChange(index, "to", e.target.value)}
                                />
                            )}

                            <select
                                className={styles.input}
                                typeof="text"
                                name="to"
                                value={educ.to}
                                onChange={(e) => handleEducationChange(index, "to", e.target.value)}
                            >
                                <option value=""></option>
                                <option value="Seleccionar fecha">Seleccionar fecha</option>
                                <option value="Presente">Presente</option>
                            </select>
                            <label className={styles.txtRegular16Purple}>Institución:</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="institution"
                                value={educ.where}
                                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                            />
                            <label className={styles.txtRegular16Purple}>Titulo obtenido:</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="title"
                                value={educ.abou}
                                onChange={(e) => handleEducationChange(index, "title", e.target.value)}
                            />
                            <button
                                className={styles.btnDelete}
                                type="button"
                                onClick={() => handleRemoveEducation(index)}>
                                Eliminar
                            </button>

                        </div>
                    ))}
                    <button
                        className={styles.btnAdd}
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
                                className={styles.btnDelete}
                                type="button"
                                onClick={() => handleRemoveLanguage(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnAdd}
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
                                className={styles.btnDelete}
                                type="button"
                                onClick={() => handleRemoveSkill(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnAdd}
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
                                className={styles.btnDelete}
                                type="button"
                                onClick={() => handleRemoveInterest(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.btnAdd}
                        type="button"
                        onClick={handleAddInterest}
                    >
                        Agregar
                    </button>
                </div>
                <button className={styles.btn} type="submit">Actualizar</button>
            </form>
            {creationStatus ?
                <p className={creationStatus.status === "Success" ? styles.txtSuccess : styles.txtError16}>{creationStatus.message}</p>
                : null}
        </div>
    )
};

export default UpdateCv;
