import { useState } from 'react'
import './App.css'
import EggSelector from "./components/EggSelector"; 

function App() { 
  const [selectedEgg, setSelectedEgg] = useState(null);
  const [eggBoilTime, setEggBoilTime] = useState(null);
  const [isReady, setIsReady] = useState(false);


  const handleSelect = (eggType, eggBoilMin) => {
    console.log("Selected egg:", eggType);
    console.log("Min to boil:", eggBoilMin);
    setSelectedEgg(eggType);
    setEggBoilTime(eggBoilMin);
    setIsReady(false);
  };

  return (
    <>

        <div>
      {!selectedEgg && <EggSelector onSelect={handleSelect} />}
      {selectedEgg && (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="relative w-48 h-48 mb-4">
            {/* Base egg image */}
            <img
              src={`/src/assets/${selectedEgg.toLowerCase()}.svg`}
              alt={selectedEgg}
              className="w-full h-full"
            />

            {/* adding eyes + bubble overlay when ready */}
          <img
            src="/src/assets/ready.svg"
            alt="Ready!"
            className={`ready-bubble pointer-events-none ${isReady ? "block" : "hidden"}`}
          />
          </div>
          <h3 className="text-2xl font-bold">Start the timer to make a {selectedEgg} egg!</h3>


          <button className="mt-4 px-4 py-2  text-orange-500 rounded" onClick={() => {
            const img = document.querySelector(`img[alt="${selectedEgg}"]`);

            if (img) {
              img.classList.add("animate-bounce");
            }

            // hide the button when clicked
            document.querySelector("button").style.display = "none";
            document.querySelector("h3").innerText = `Let's go!`;
           
            //start timer and show progress
            let timeLeft = eggBoilTime;
            const timer = setInterval(() => {
              if (timeLeft <= 0) {
                clearInterval(timer);
                document.querySelector("h3").innerText = `Your ${selectedEgg} egg is ready!`;
                setIsReady(true);

                //remove bounce animation from image when egg is ready
                if (img) {
                  img.classList.remove("animate-bounce");
                }
              } else {
                timeLeft--; 
                let timeInMinutes = Math.floor(timeLeft / 60);
                let timeInSeconds = timeLeft % 60;
                document.querySelector("h3").innerText = `Your ${selectedEgg} egg will be ready in ${timeInMinutes} minutes and ${timeInSeconds} seconds.`;
              }
            }, 1000);

 
          }}>Start Timer</button>
        </div>
      )}
    </div>
 

    </>
  )
}

export default App
