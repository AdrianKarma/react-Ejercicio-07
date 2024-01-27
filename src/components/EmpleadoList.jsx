import { Container } from "react-bootstrap";
import { empleados } from "../utilities/datos";
import EmpleadoRow from "./EmpleadoRow";


const EmpleadoList = () => {
    return (
        <>
        <Container className="Principal">
        <EmpleadoRow  
            empleados={empleados}
        />
        </Container>
    </>
    );
};

export default EmpleadoList;