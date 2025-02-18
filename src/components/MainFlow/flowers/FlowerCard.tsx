import favorite from "../../../assets/favorite.svg";

interface FlowerCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const FlowerCard = ({ flower }: { flower: FlowerCardProps }) => {
  return (
    <div className="w-[203px] h-[237px] rounded-[20px] bg-[#FFF9F3] dropshadow">
      <div className="relative">
        <div className="absolute right-2 top-2 rounded-[10px] bg-white p-1">
          <img src={favorite} alt="" className="w-5 h-5 cursor-pointer" />
        </div>
        <img
          src={flower.image}
          alt=""
          className="rounded-tr-[20px] rounded-tl-[20px]"
        />
      </div>
      <div className="flex justify-between px-2 items-center py-2">
        <p>{flower.name}</p>
        <p>{flower.price}$</p>
      </div>
    </div>
  );
};

export default FlowerCard;
