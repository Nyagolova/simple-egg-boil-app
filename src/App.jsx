import { useState } from 'react'
import './App.css'
import EggSelector from "./components/EggSelector"; 

function App() { 
  const [selectedEgg, setSelectedEgg] = useState(null);
  const [eggBoilTime, setEggBoilTime] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [areWeCooking, setAreWeCooking] = useState(false);
  const [showReturn, setShowReturn] = useState(false);


  const handleSelect = (eggType, eggBoilMin) => {
    console.log("Selected egg:", eggType);
    console.log("Min to boil:", eggBoilMin);
    setSelectedEgg(eggType);
    setEggBoilTime(eggBoilMin);
    setIsReady(false);
    setAreWeCooking(false);
    setShowReturn(false);
  };

  return (
    <>

    

    <div>
      {!selectedEgg && <><h1 className="font-bold text-center py-20">Choose your egg! 🤩 </h1><EggSelector onSelect={handleSelect} /></>}
      {selectedEgg && (
        <div className="flex flex-col justify-center items-center h-screen">
 
          <div className="relative w-48 h-48 mb-4">
            {/* Base egg image */}
            <img
              src={`/src/assets/${selectedEgg.toLowerCase()}.svg`}
              alt={selectedEgg}
              className="w-full h-full"
            />

            {/* adding eyes + bubble overlay when ready*/}
          <img
            src="/src/assets/ready.svg"
            alt="Ready!"
            className={`ready-bubble animate-bounce pointer-events-none ${isReady ? "block" : "hidden"}`}
          />
          </div>
          <h3 className="text-2xl font-bold py-8">Start the timer to make a {selectedEgg} egg!</h3>

          <p className={`mt-2 text-xs text-gray-500 italic ${areWeCooking ? 'block' : 'hidden'}`}>
            * Timer duration shortened for testing purposes
          </p>

          <button className="mt-4 px-4 py-2  text-orange-500 rounded" onClick={() => {
            const img = document.querySelector(`img[alt="${selectedEgg}"]`);

            if (img) {
              img.classList.add("animate-spin");
            }

            // hide the button when clicked
            document.querySelector("button").style.display = "none";
            document.querySelector("h3").innerText = `Let's go!`;
           
            //start timer and show progress
            let timeLeft = eggBoilTime + 2; // convert minutes to seconds
            const timer = setInterval(() => {
              if (timeLeft <= 0) {
                clearInterval(timer);
                document.querySelector("h3").innerText = `Your ${selectedEgg} egg is ready!`;
                setIsReady(true);
                setAreWeCooking(false);
                setShowReturn(true);
                //remove spin and add bounce animation from image when egg is ready
                if (img) {
                  img.classList.remove("animate-spin");
                  img.classList.add("animate-bounce");
                }
              } else {
                setAreWeCooking(true);
                timeLeft--;
                let timeInMinutes = Math.floor(timeLeft / 60);
                let timeInSeconds = timeLeft % 60;
                document.querySelector("h3").innerText = `Your ${selectedEgg} egg will be ready in ${timeInMinutes} minutes and ${timeInSeconds} seconds.*`;


              }
            }, 1000);

 
          }}>Start Timer</button>

          {showReturn && (
            <button
              onClick={() => {
                setSelectedEgg(null);  // goes back to home (egg selection)
                setShowReturn(false);  // hides button until next time
              }}
              className="mt-4 px-4 py-2  text-orange-500 rounded"
            >
              Start Over
            </button>
          )}
        </div>
      )}
    </div>
 

    </>
  )
}

export default App
