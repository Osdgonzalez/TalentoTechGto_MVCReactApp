import "bootstrap/dist/css/bootstrap.min.css"
import Tarjeta from "./components/Tarjeta";
import { useEffect, useState } from "react" 

const App = () => {


    //Traer datos de base de datos MVCReact

    const [empleados, setEmpleados] = useState([]);

    const consumirAPI = async () => {
        const response = await fetch("api/empleado/obtenerEmpleados");

        if (response.ok) {
            const datos = await response.json();
            console.log(datos);

            setEmpleados(datos);
        }
    }

    useEffect(() => {
        consumirAPI()
    }, []);


    //Codigo de la primera parte del proyecto
        //useState para manejar el estado de los componentes dentro de la aplicación

    //useEffect para detectar el cambio o accion de una variable y ejecutar otra acción

    /*let personaData = {
        nombre: "Oscar",
        correo: "oscar@gmail.com"
    }

    const [numero, setNumero] = useState(0);

    const [persona, setPersona] = useState(personaData);

    const [nombre, setNombre] = useState("Oscar");

    const escribirNombre = () => {
        setNombre(nombre === "Oscar" ? "Priss" : "Oscar");
    }

    useEffect(() => {
        console.log("numero: ", numero);
        console.log("persona: ", persona);
        console.log("nombre: ", nombre);
    }, [nombre, persona, numero]);*/

    /**
     * numero = Nombre de variable para obtener el valor actual (estado)
     * setNumero = Funcion que actualiza el valor (estado)
     */



    return (
        <div className="container-fluid">

            <h5>Lista de Empleados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado) => (
                            <tr key={empleado.idEmpleado}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.correo}</td>
                                <td>{empleado.direccion}</td>
                                <td>{empleado.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


          {/*Codigo de la primera parte del proyecto*/}

            {/*<div className="row justify-content-sm-center">*/}

            {/*    <h1>El valor actual del número es {numero}</h1>*/}
            {/*    <button className="btn btn-primary"*/}
            {/*        onClick={() => setNumero( numero + 1 )}*/}
            {/*    >*/}
            {/*        Sumar + 1*/}
            {/*    </button>*/}

            {/*    <br></br>*/}
            {/*    <br></br>*/}
            {/*    <br></br>*/}
            {/*    <br></br>*/}

            {/*    <h5>Mi nombre es: {persona.nombre}</h5>*/}
            {/*    <h5>Mi correo es: {persona.correo}</h5>*/}
            {/*    <button className="btn btn-warning"*/}
            {/*        onClick={() => setPersona({*/}
            {/*            ...persona,*/}
            {/*            correo: "otrocorreo@gamil.com"*/}
            {/*        })}>*/}
            {/*        Cambiar correo electrónico*/}
            {/*    </button>*/}

            {/*    <br></br>*/}
            {/*    <br></br>*/}
            {/*    <br></br>*/}
            {/*    <br></br>*/}

            {/*    <h5>My name is: {nombre}</h5>*/}
            {/*    <button className="btn btn-danger"*/}
            {/*        onClick={ escribirNombre }>*/}
            {/*        Cambiar nombre*/}
            {/*    </button>*/}
            {/*    */}{/*<div className="col-sm-4">*/}
            {/*    */}{/*    <Tarjeta />*/}
            {/*    */}{/*    <Tarjeta title="Hola Mundo" description="Esto es una descripcion de prueba"/>*/}
            {/*    */}{/*    <Tarjeta />*/}
            {/*    */}{/*    <Tarjeta txtButton="Eliminar"/>*/}
            {/*    */}{/*    <Tarjeta />*/}
            {/*    */}{/*</div>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;