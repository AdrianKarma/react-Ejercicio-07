import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({empleados}) => {
    return (
        <ListGroup>
                {empleados.map((empleado, posicionEmpleado) => (
                <EmpleadoAvatar 
                    key={posicionEmpleado}
                    empleado={empleado}
                />
            ))}
      
    </ListGroup>
    );
};

export default EmpleadoRow;