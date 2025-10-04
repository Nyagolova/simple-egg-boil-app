import { useState } from 'react'
import './App.css'
import EggSelector from "./components/EggSelector"; 

function App() { 
  const [selectedEgg, setSelectedEgg] = useState(null);

  const handleSelect = (eggType) => {
    console.log("Selected egg:", eggType);
    setSelectedEgg(eggType);
    // Later: navigate to timer screen
  };

  return (
    <>

        <div>
      {!selectedEgg && <EggSelector onSelect={handleSelect} />}
      {selectedEgg && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">You selected {selectedEgg} egg!</h1>
        </div>
      )}
    </div>
 

    </>
  )
}

export default App
