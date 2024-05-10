
import './App.css';
import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import CarsOld from './Components/CarsOld';
import CarAdd from './Components/CarAdd'
import CarDelete from './Components/CarDelete';

function App() {
  return (
 
  <div>
      <CarList></CarList>
      <CarsOld></CarsOld>
      <CarAdd></CarAdd>
      <CarDelete></CarDelete>
      <CarForm></CarForm>
  </div>
  );
}

export default App;
