import EggCard from "./EggCard";
import softEgg from "../assets/soft.svg";
import jammyEgg from "../assets/jammy.svg";
import mediumEgg from "../assets/medium.svg";
import hardEgg from "../assets/hard.svg";

const eggs = [
  { type: "Soft", imgSrc: softEgg },
  { type: "Jammy", imgSrc: jammyEgg },
  { type: "Medium", imgSrc: mediumEgg },
  { type: "Hard", imgSrc: hardEgg },
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
            onClick={() => onSelect(egg.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default EggSelector;
