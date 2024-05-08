import { Link } from "react-router-dom";
import IconBtn from "./IconBtn";
import PrimaryBtn from "./PrimaryBtn";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { toast } from "sonner";

const FoodCard = ({ id }) => {
  const isLogin = false;
  const handleSave = () => {
    if (isLogin) {
      toast("Saved successfully");
    } else {
      toast("You need to login first!");
    }
  };
  return (
    <Card className="max-w-[305px] min-w-[250px] rounded-[20px] px-[15px] min-[515px]:px-2 sm:px-[15px] py-3 min-[515px]:py-2 sm:py-3 hover:shadow-lg duration-200">
      <CardHeader className=" px-0 pt-0 pb-1">
        <img
          src="/ChickenPinsein.jpg"
          alt="img"
          className=" rounded-[20px] w-full h-[165px] object-cover"
        />
      </CardHeader>
      <CardContent className=" px-0 py-2 space-y-2">
        <section className="text-[#96999F] flex items-center justify-between">
          <div className="flex space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
            <p className=" font-medium text-[16px]">20 m</p>
          </div>
          <div className="flex space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
            <p className=" font-medium text-[16px]">1.4k</p>
          </div>
        </section>

        <h3 className=" font-[mmFont] leading-8 text-[26px]">ကြက်ပင်စိမ်း</h3>
        <p className=" text-[12px] leading-5">
          Consultations for managing chronic conditions like diabetes,
          hypertension, asthma, etc.
        </p>
      </CardContent>
      <CardFooter className=" px-0 py-2 flex justify-between items-center">
        <Link to="/recipes/1">
          <PrimaryBtn className=" font-[mmFont]">
            ချက်ပြုတ်နည်းကြည့်ရှုမည်
          </PrimaryBtn>
        </Link>
        <IconBtn tooltipContent="Save" onClick={handleSave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </IconBtn>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
