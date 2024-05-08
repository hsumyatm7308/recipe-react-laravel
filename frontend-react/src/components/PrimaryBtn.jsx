import { Button } from "./ui/button";
const PrimaryBtn = ({ children, className }) => {
  return (
    <Button
      className={`bg-main border  border-main h-[50px]  rounded-[13px] hover:bg-transparent duration-300 hover:text-main text-base ${className}`}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
