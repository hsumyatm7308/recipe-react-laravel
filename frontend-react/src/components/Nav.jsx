import { ChefHat } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import IconBtn from "./IconBtn";
import PrimaryBtn from "./PrimaryBtn";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { NavAccDropDown } from "./NavAccDropDown";
import NotiDropDown from "./NotiDropDown";

const Nav = () => {
  const { pathname } = useLocation();
  const login = true;
  return (
    <main className=" border-b">
      <nav className="px-4 sm:container mx-auto justify-between md:justify-start flex items-center gap-10 h-16 sm:h-20 text-lg ">
        <Link to="/" className=" flex items-center space-x-1 text-main">
          <ChefHat size={40} />
          <h1 className="font-[mmFont] text-lg">ချက်ကြမယ်</h1>
        </Link>
        {/* nav item  */}
        <section className="hidden md:flex items-center space-x-[22px] font-medium h-full grow">
          <Link
            to="/"
            className={`border-b-2 font-[mmFont] hover:border-gray-500 block py-[26px] ${
              pathname === "/" ? "border-main" : "border-transparent"
            }`}
          >
            စူးစမ်းပါ
          </Link>
          <Link
            to="/about-us"
            className={`border-b-2 font-[mmFont] hover:border-gray-500 block py-[26px] ${
              pathname === "/about-us" ? "border-main" : "border-transparent"
            }`}
          >
            ကျွန်ုပ်တို့အကြောင်း
          </Link>
          <Link
            to="/contact-us/issues"
            className={`border-b-2 font-[mmFont] hover:border-gray-500 block py-[26px] ${
              pathname.includes("/contact-us")
                ? "border-main"
                : "border-transparent"
            }`}
          >
            ဆက်သွယ်ရန်
          </Link>
        </section>
        {/* nav icons  */}
        <section className="hidden lg:flex items-center">
          {!pathname.includes("/search") && (
            <Link to="/search">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className=" rounded-full w-10 h-10"
                    >
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Search</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          )}
          {pathname !== "/profile/recipes/create" && (
            <Link to="/recipes/create">
              <PrimaryBtn className="w-auto h-10 mx-4">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <h5 className=" font-[mmFont]">ချက်ပြုတ်နည်းဖန်တီးပါ</h5>
              </PrimaryBtn>
            </Link>
          )}
          {/* ???need to ask the ui */}
          <NotiDropDown />
          <Link to="/profile/recipes/saved">
            <IconBtn tooltipContent="Saved" className="w-10 h-10 mx-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
            </IconBtn>
          </Link>
          {login ? (
            <NavAccDropDown />
          ) : (
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-main text-base hover:text-main rounded-[13px]"
              >
                Log in
              </Button>
            </Link>
          )}
        </section>
        {/* nav icons with hamburger menu  */}
        <section className=" lg:hidden space-x-2">
          <Link to="/search">
            <Button size="icon" variant="ghost" className="rounded-full">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </Link>
          <Button size="icon" variant="ghost" className="rounded-full">
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
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </Button>
        </section>
      </nav>
    </main>
  );
};

export default Nav;
