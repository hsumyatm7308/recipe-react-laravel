import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const id = 1;
  const cat = "car";
  const page = 1;
  return (
    <Link
      to={`/category?cat=${cat}&page=${page}`}
      className=" w-[100px] md:w-[160px] rounded-[13px]  flex flex-col items-center py-3 px-3 hover:shadow"
    >
      <img
        src="/ChickenPinsein.jpg"
        className=" w-20 h-20 object-cover rounded-full"
        alt=""
      />
      <h4 className=" font-[mmFont] text-xl text-center">မြန်မာအစားအစာ</h4>
    </Link>
  );
};

export default CategoryCard;
