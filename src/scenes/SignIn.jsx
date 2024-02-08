import { useState, useEffect } from 'react';
import image from "../assets/Working-Man-Illustration.jpg"
import "./SingIn.css"
import { useDispatch } from 'react-redux';
import axios from 'axios'
function handleSubmit(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado de recargar la página al enviar el formulario
    // Aquí puedes realizar las acciones que desees al enviar el formulario
  }
function SignIn() {
    const dispatch = useDispatch();
  const [teams, setteams] = useState([]);
  
  useEffect(() => {
    
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    validate(input);

    if (Object.values(error).some((e) => e)) {
      console.log('Error en el formulario. No se enviarán datos.');
      return;
    }

    try {
      const url = `http://localhost:3001/drivers?nombre=${input.nombre}&apellido=${input.apellido}&descripcion=${input.descripcion}&imagen=${input.imagen}&nacionalidad=${input.nacionalidad}&fechaNacimiento=${input.fechaNacimiento}&team=${input.team}&color=${input.color}`;//http://localhost:3001/drivers
      //http://localhost:3001/drivers?nombre=${input.nombre}&apellido=${input.apellido}&descripcion=${input.descripcion}&imagen=${input.imagen}&nacionalidad=${input.nacionalidad}&fechaNacimiento=${input.fechaNacimiento}&team=${input.team}
      const response = await axios.post(url/*, {
        EMAIL: '',
        CONTRASEÑA: ''
      }*/);

      console.log('Respuesta del servidor:', response.data);

      setInput({
        EMAIL: '',
        CONTRASEÑA: ''
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  const [input, setInput] = useState({
    EMAIL: '',
    CONTRASEÑA: ''
  });
  console.log("input:",input)
  const [error, setError] = useState({
    EMAIL: '',
    CONTRASEÑA: ''
  });
  console.log("error:",error)
    
  const validate = (input) => {
    let newErrors = {};
  
    // Validaciones para los nuevos campos
    if (!/^[a-zA-Z\s]+$/.test(input.EMAIL)) {
      newErrors = { ...newErrors, EMAIL: "Error: El EMAIL solo debe contener letras y espacios." };
    }
  
    // Apellido: Solo letras y espacios permitidos
    if (!/^[a-zA-Z\s]+$/.test(input.CONTRASEÑA)) {
      newErrors = { ...newErrors, CONTRASEÑA: "Error: La CONTRASEÑA solo debe contener letras y espacios." };
    }
  
    // Descripción: Puede contener cualquier caracter (opcional)
    
  
    // Nacionalidad: Puedes realizar validaciones específicas según tus requisitos
    
  
    setError(newErrors);
  
    // Clear console log messages
    if (Object.values(newErrors).every((e) => !e)) {
      console.clear();
    } else {
      console.log("Errors:", newErrors);
    }
  };

    function handleChange(e) {
        if (e.target.name === "team") {
          const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
          setInput((prevInput) => ({
            ...prevInput,
            [e.target.name]: selectedOptions,
          }));
        } else {
          setInput((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
          }));
        }
      }

    useEffect(() => {
        validate(input);
      }, [input]); // Run this effect whenever input changes
      
    return (
        <div class="container">

        <div class="content">
            <img class="singin_and_singup_image" src={image} alt="Imagen empleado"></img>
            <div class="Formulario">
               
                <form className='formulario' onSubmit={(e)=> handleSubmit(e)}>
                     <p>Iniciar Sesión</p>
                     <div>
                        <label>EMAIL:</label>
                        <br></br>
                        <input name="EMAIL" value={input.EMAIL} onChange={handleChange} />
                        <br></br>
                        <span className='span2'>{error.EMAIL}</span>
                    </div>
                    <div>
                        <label>CONTRASEÑA:</label>
                        <br></br>
                        <input name="CONTRASEÑA" value={input.CONTRASEÑA} onChange={handleChange} />
                        <br></br>
                        <span className='span2'>{error.CONTRASEÑA}</span>
                    </div>
                    <p>¿Has olvidado tu contraseña?</p>
                    {Object.values(error).every((e) => !e) && <button type="submit" class="button">
        <span className="button-content">INICIAR SESIÓN</span>
          </button>}
                </form>
            </div>
        </div>
    </div>
    )
};

export default SignIn; 
