
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const EmpleadoAvatar = ({ empleado }) => {
  const { fullName, title, department, pic } = empleado;

  return (
    <Container>
     
     
          <div className="text-center d-flex border">
          <Image src={`/src/img/${pic}`} alt={fullName} fluid />
          
          
            <div className=' border'>

            <h2>{fullName}</h2>
            <div className='d-flex '>    <p className='mx-4'>{title}</p>
            <p>{department}</p></div>
        
            </div>
           
           
          </div>
       
     
    </Container>
  );
};

export default EmpleadoAvatar;
