import "./App.css";
import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarsOld from "./Components/CarsOld";


import React, { useState } from "react";
function App() {
  const [carToEdit, setCarToEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
      setRefresh(prevRefresh => !prevRefresh); // toggle refresh state
  };
  return (
    <div>
      <CarForm
        carToEdit={carToEdit} setCarToEdit={setCarToEdit} refresh={triggerRefresh} 
        
        
      />
      <CarList setCarToEdit={setCarToEdit} refresh={triggerRefresh} 
        />
      <CarsOld refresh={triggerRefresh} ></CarsOld>
    </div>
  );
}

export default App;
