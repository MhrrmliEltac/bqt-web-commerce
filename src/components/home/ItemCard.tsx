interface CardItem {
  id: number;
  title: string;
  image: string;
}

const ItemCard = ({ cardItem }: { cardItem: CardItem }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardItem.image})` }}
      className="w-[315px] h-[380px] border rounded-[20px] shadow-md overflow-hidden"
    >
      <div className="w-full h-[380px] flex justify-end flex-col p-[16px] text-xl bg-cover bg-center bg-no-repeat gradient text-white">
        {cardItem.title}
      </div>
    </div>
  );
};

export default ItemCard;
