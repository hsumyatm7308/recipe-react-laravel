import { Button } from "./ui/button";
const OutlineBtn = ({ children, className }) => {
  return (
    <Button
      className={`hover:bg-main border text-main hover:text-white bg-transparent border-main h-[50px] w-[204px] rounded-[13px] duration-300 text-base ${className}`}
    >
      {children}
    </Button>
  );
};

export default OutlineBtn;
