import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className=" bg-[#130D06]  flex flex-col">
      <section className="grow flex justify-center items-center border-b border-[#545454] text-white py-16 px-3">
        <div className="flex flex-col items-center w-[798px] text-center space-y-8">
          <div className="flex items-center text-[32px] space-x-[15px] font-medium">
            <img src="/logo.svg" alt="logo" className=" w-[33px] h-[33px]" />
            <h3>Chak Kya Mal</h3>
          </div>
          <p className=" text-base">
            Lorem ipsum dolor sit amet consectetur. Tortor ac feugiat facilisis
            nunc nunc parturient ultrices egestas. Aliquam auctor.
          </p>
          <div className=" bg-[#545454] h-[1px] w-full"></div>
          <div className="flex w-full justify-center items-center text-base sm:text-[20px] gap-5 sm:gap-16">
            <Link to="/about-us">
              <h4>About Us</h4>
            </Link>
            <Link to="/contact-us/feedback">
              <h4>Contact Us</h4>
            </Link>
            <Link to="/">
              <h4>Recipes</h4>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-around items-center py-7 gap-3 px-3">
        <p className=" order-3 md:order-1 text-lg text-[#545454] text-center">
          © 2024 Chak kya malr.Co. All rights reserved.
        </p>
        <div className="order-2 flex text-white items-center space-x-7 text-2xl">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Footer;
