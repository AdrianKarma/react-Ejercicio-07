
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

const EmpleadoAvatar = ({ empleado }) => {
  const { fullName, title, department, pic } = empleado;

  return (
    <Container>
     
     
          <div className="text-center d-flex border my-1">
          <Image src={`/src/img/${pic}`} alt={fullName} fluid />
          
          
            <div className='  d-flex flex-column justify-content-center align-items-center'>

            <h2>{fullName}</h2>
            <div className='d-flex '>    <h3 className='mx-2'>{title}</h3>
            <Badge bg="info" className="ms-3 mb-3 p-2">
                {department}
              </Badge></div>
        
            </div>
           
           
          </div>
       
     
    </Container>
  );
};

export default EmpleadoAvatar;
