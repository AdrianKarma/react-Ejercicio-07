import { empleados } from "../utilities/datos";
import EmpleadoRow from "./EmpleadoRow";


const EmpleadoList = () => {
    return (
        <>
        <EmpleadoRow 
            empleados={empleados}
        />
    </>
    );
};

export default EmpleadoList;