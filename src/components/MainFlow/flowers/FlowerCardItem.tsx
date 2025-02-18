import Tulip from "../../../assets/Tulip.svg";
import Rose from "../../../assets/Rose.svg";
import Sunflower from "../../../assets/Sunflowr.svg";
import FlowerCard from "./FlowerCard";

interface FlowerCardItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const flower: FlowerCardItemProps[] = [
  { id: 1, name: "Tulip", image: Tulip, price: 5 },
  { id: 2, name: "Rose", image: Rose, price: 5 },
  { id: 3, name: "Sunflower", image: Sunflower, price: 5 },
];

const FlowerCardItem = () => {
  return (
    <div className="mt-[60px] grid grid-cols-1 md:grid-cols-6 gap-[20px]">
      {flower.map((flower: FlowerCardItemProps) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
};

export default FlowerCardItem;
