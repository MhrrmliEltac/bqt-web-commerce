import { Box } from "@mui/material";
import { useState } from "react";
import AddNewCard from "../payment/AddNewCard";
import { toast } from "sonner";

interface MyCardType {
  id: number;
  cardNumber: string;
  dateTime: string;
  CVV?: number;
}

const MyCardsItem: MyCardType[] = [
  {
    id: 1,
    cardNumber: "**** **** **** 1234",
    dateTime: "11/25",
    CVV: 519,
  },
  {
    id: 2,
    cardNumber: "**** **** **** 1234",
    dateTime: "11/25",
    CVV: 125,
  },
];

const MyCards = () => {
  const [cardItem, setCardItem] = useState<MyCardType[]>(MyCardsItem);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const deleteMyCard = (id: number) => {
    let deletedCart = cardItem.filter((cart) => cart.id !== id);
    setCardItem(deletedCart);
    toast.success("Cart deleted successfully", {
      style: {
        background: "#ECFDF3",
        color: "#2C4B42",
      },
    });
  };

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {cardItem &&
          cardItem.length > 0 &&
          cardItem?.map((cart: MyCardType) => (
            <Box key={cart.id}>
              <div className="flex justify-between gap-[50px] border-b border-[#2c4b42] sm:w-[408px] w-full">
                <div className="flex justify-between gap-20 pb-2">
                  <p>{cart.cardNumber}</p>
                  <p>{cart.dateTime}</p>
                </div>
                <button onClick={() => deleteMyCard(cart.id)}>delete</button>
              </div>
            </Box>
          ))}
        <button
          onClick={handleOpen}
          className="border border-[#2C4B42] hover:shadow-md px-10 text-[#2C4B42]  rounded-[10px] h-[40px] shrink-0 text-lg max-sm:text-sm hover:bg-[#2c4b42] hover:text-[#FFF9F3] transition-colors duration-300 sm:w-[408px] w-full"
        >
          Add new Card
        </button>
        <AddNewCard open={open} handleClose={handleClose} />
      </Box>
    </section>
  );
};

export default MyCards;
