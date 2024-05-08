import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import OutlineBtn from "../components/OutlineBtn";
import PopularCard from "../components/PopularCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Home = () => {
  return (
    <main className=" px-1  md:px-2 space-y-9">
      <section className=" px-5 md:px-2">
        <h3 className="mt-8 mb-7 font-[mmFont] text-xl ">လူကြိုက်များသော</h3>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className=" basis-[325px]">
                <PopularCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" h-10 w-10 md:h-[60px] md:w-[60px] shadow bg-white" />
          <CarouselNext className="h-10 w-10 md:h-[60px] md:w-[60px] shadow bg-white" />
        </Carousel>
      </section>
      <section className=" flex overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <CategoryCard />
        ))}
      </section>
      <section className=" justify-items-center lg:justify-items-start grid grid-flow-row grid-cols-1 min-[515px]:grid-cols-2 min-[880px]:grid-cols-3 min-[1170px]:grid-cols-4 gap-x-2 gap-y-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <FoodCard key={index} />
        ))}
      </section>
      <section className=" flex justify-center pb-14">
        <OutlineBtn>Load More</OutlineBtn>
      </section>
    </main>
  );
};

export default Home;
