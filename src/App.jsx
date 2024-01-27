import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';


function App() {


  return (
    <>
    <h1 className='text-center my-4'>Lista de Empleados</h1>
    <Container>

      <EmpleadoList></EmpleadoList>
    </Container>
      
    </>
  )
}

export default App
