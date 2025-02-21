import { useState } from "react";
import tulpan1 from "../../../assets/tulpan-1.png";
import tulpan2 from "../../../assets/tulpan-2.png";
import tulpan3 from "../../../assets/tulpan-3.png";
import tulpan4 from "../../../assets/tulpan-4.png";
import tulpan5 from "../../../assets/tulpan-5.png";
import favorite from "../../../assets/favorite.svg";
import favoriteFill from "../../../assets/favorite-fill.svg";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

interface tulpanImageType {
  id: number;
  image: string;
}

const tulpanImage: tulpanImageType[] = [
  { id: 1, image: tulpan1 },
  { id: 2, image: tulpan2 },
  { id: 3, image: tulpan3 },
  { id: 4, image: tulpan4 },
  { id: 5, image: tulpan5 },
];

type liItem = {
  id: number;
  color: string;
};

const colors: liItem[] = [
  { id: 1, color: "#E34141" },
  { id: 2, color: "#BC6980" },
  { id: 3, color: "#E0E34C" },
  { id: 4, color: "#85E34C" },
  { id: 5, color: "#4C9BE3" },
  { id: 6, color: "#E34CD4" },
  { id: 7, color: "#E34141" },
];

const FlowerDetail = () => {
  const [tulpanImageId, setTulpanImageId] = useState<string>(
    tulpanImage[0].image
  );
  const [active, setActive] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [priceValue, setPriceValue] = useState<number>(5);
  const [favoriteImg, setFavorite] = useState<boolean>(false);
  let [countValue, setCountValue] = useState<number>(1);
  let price = 5;

  const handleImage = (img: string, id: number) => {
    setTulpanImageId(img);
    setActive(id);
  };

  const handleBorder = (id: number) => {
    setSelectedColor(id);
  };

  const handleFavorite = () => {
    setFavorite(!favoriteImg);
  };

  const increaseFunc = () => {
    countValue < 10 ? setCountValue(++countValue) : setCountValue(10);
    setPriceValue(price * countValue);
  };

  const decreaseFunc = () => {
    countValue > 1 ? setCountValue(--countValue) : setCountValue(1);
    setPriceValue(price * countValue);
  };

  return (
    <section className="min-h-[calc(100vh-200px)] md:mb-48 mb-3">
      <div className="grid grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4 lg:h-full md:h-[330px]">
        <div className="md:grid md:grid-rows-1 md:grid-cols-10 flex flex-col-reverse gap-2">
          <div className="w-full overflow-auto gap-5 md:col-span-2 col-span-10 flex md:flex-col cursor-pointer">
            {tulpanImage.map((tulpan: tulpanImageType) => (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={tulpan.id}
                src={tulpan.image}
                alt="tulpan"
                width={80}
                height={70}
                className={`object-cover shadow rounded-[15px] transition-all duration-500 ${
                  active === tulpan.id
                    ? "border-2 border-[#2C4B42] scale-105"
                    : "border-none"
                }`}
                onClick={() => handleImage(tulpan.image, tulpan.id)}
              />
            ))}
          </div>

          <motion.div
            key={tulpanImageId}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:col-span-8 col-span-10 relative"
          >
            <motion.img
              src={tulpanImageId}
              alt="Selected Flower"
              className="h-full rounded-[20px] w-full"
            />
            <motion.div
              whileTap={{ scale: 1.1 }}
              onClick={handleFavorite}
              className="absolute top-2 right-2 bg-white p-1 rounded-[10px] cursor-pointer"
            >
              <img
                src={favoriteImg ? favoriteFill : favorite}
                alt=""
                className="w-7 h-7"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-transparent font-kodchasan h-full flex flex-col justify-between gap-7 sm:py-5 md:py-0"
        >
          <div className="flex text-[#2C4B42] gap-5 flex-col">
            <h2 className="font-[500] text-3xl">Tulip bouqet</h2>
            <span className="font-[400] text-lg">Bouqets</span>
          </div>
          <div className="font-[400] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            quis congue neque. Nunc pulvinar mattis felis quis dictum. Quisque
            non auctor diam. Ut at vestibulum magna.
          </div>
          <ul className="flex gap-3 items-center flex-wrap">
            {colors.map((color) => (
              <li
                key={color.id}
                onClick={() => handleBorder(color.id)}
                style={{
                  backgroundColor: color.color,
                  transition: "border 0.1s ease",
                  borderWidth: selectedColor === color.id ? 2 : 0,
                  borderColor:
                    selectedColor === color.id ? "#2C4B42" : "transparent",
                }}
                className="rounded-full w-6 h-6 shadow-sm cursor-pointer hover:opacity-90 transition-opacity duration-200"
              ></li>
            ))}
          </ul>
          <div>
            <div className="flex">
              <button
                onClick={decreaseFunc}
                disabled={countValue <= 1}
                className={`bg-[#CCDAD6] ${
                  countValue <= 1 && "cursor-not-allowed"
                } rounded-tl-3xl flex justify-center items-center py-2 px-4 w-[200px] text-3xl text-[#2C4B42]`}
              >
                -
              </button>
              <div
                id="count"
                className="flex justify-center items-center text-center text-2xl outline-none md:w-[200px] w-full bg-transparent rounded-none "
              >
                <NumberFlow value={countValue} />
              </div>
              <button
                onClick={increaseFunc}
                disabled={countValue >= 10}
                className={`bg-[#CCDAD6] ${
                  countValue >= 10 && "cursor-not-allowed"
                } rounded-tr-3xl flex justify-center items-center py-2 px-4 w-[200px] text-3xl text-[#2C4B42]`}
              >
                +
              </button>
            </div>
            <div className="rounded-b-3xl bg-[#2C4B42] flex justify-center items-center py-4 text-white">
              <p>
                Add to cart <NumberFlow value={priceValue} />$
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowerDetail;
