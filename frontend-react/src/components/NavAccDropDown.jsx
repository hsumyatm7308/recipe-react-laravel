import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignOutMutation } from "../store/services/endpoints/auth";
import { removeUser } from "../store/slices/authSlice";
import { toast } from "sonner";
import Cookies from "js-cookie";

export function NavAccDropDown({ userData }) {
  const token = Cookies.get("token");
  const [signOut] = useSignOutMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const { data } = await signOut(token);
    console.log(data);
    if (data?.status) {
      toast(data?.message);
      dispatch(removeUser());
      nav("/sign-in");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="rounded-full relative group"
          variant="ghost"
        >
          <Avatar className="h-[30px] w-[30px]">
            <AvatarImage
              src={userData.image}
              alt="user profile image"
              className=" rounded-full"
            />
            <AvatarFallback className="border">
              {userData.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className=" scale-0 group-hover:scale-100 delay-300 transition duration-300 animate-in fade-in-0 text-sm bottom-[-40px] rounded-md  group-hover:block zoom-in-95 absolute border z-50 px-3 py-1.5 bg-white">
            Profile
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] px-0 rounded-[13px]">
        <DropdownMenuLabel className=" h-[100px] flex items-center space-x-2 p-[15px]">
          {userData.image ? (
            <div className="w-[50px] h-[50px] rounded-full">
              <img src={userData.image} alt="Pp" className=" object-cover " />
            </div>
          ) : (
            <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center text-3xl">
              {userData.name[0].toUpperCase()}
            </div>
          )}
          <div>
            <h4 className=" text-base font-medium">{userData.name}</h4>
            <Link to="/profile" className=" text-main text-xs font-light">
              view profile
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-[#D9D9D9]" />
        <DropdownMenuGroup className="p-[15px]">
          <DropdownMenuItem className="flex space-x-3 rounded-[13px] px-3 h-9 focus:bg-[#E9EBF8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <p className=" text-xs">Bookmark</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-3 rounded-[13px] px-3 h-9 focus:bg-[#E9EBF8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>

            <p className=" text-xs">Language</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-3 rounded-[13px] px-3 h-9 focus:bg-[#E9EBF8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <p className=" text-xs">Help</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-3 rounded-[13px] px-3 h-9 focus:bg-[#E9EBF8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>

            <p className=" text-xs">Account Setting</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="px-[15px] pb-[15px] mt-[32px]">
          <DropdownMenuItem
            className="flex space-x-3 rounded-[13px] px-3 h-9 focus:text-danger focus:bg-[#E9EBF8]"
            onClick={handleSignOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

            <p className=" text-xs">Log out</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
