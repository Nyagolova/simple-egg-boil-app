import EggCard from "./EggCard";
import softEgg from "../assets/soft.svg";
import jammyEgg from "../assets/jammy.svg";
import mediumEgg from "../assets/medium.svg";
import hardEgg from "../assets/hard.svg";

const eggs = [
  { type: "Soft", imgSrc: softEgg, minBoilTime: 3 },
  { type: "Jammy", imgSrc: jammyEgg, minBoilTime: 4 },
  { type: "Medium", imgSrc: mediumEgg, minBoilTime: 5 },
  { type: "Hard", imgSrc: hardEgg, minBoilTime: 6 },
];

const EggSelector = ({ onSelect }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        {eggs.map((egg) => (
          <EggCard
            key={egg.type}
            type={egg.type}
            imgSrc={egg.imgSrc}
            minBoilTime={egg.minBoilTime}
            onClick={() => onSelect(egg.type, egg.minBoilTime)}
          />
        ))}
      </div>
    </div>
  );
};

export default EggSelector;
