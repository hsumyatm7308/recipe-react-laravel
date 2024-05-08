import FoodCard from "./components/FoodCard";
import IconBtn from "./components/IconBtn";
import OutlineBtn from "./components/OutlineBtn";
import PrimaryBtn from "./components/PrimaryBtn";
import SavedCard from "./components/SavedCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PopularCard from "./components/PopularCard";
import CategoryCard from "./components/CategoryCard";
import { Route, Routes } from "react-router-dom";
import {
  AboutUsPage,
  AccSettingPage,
  CreateRecipesPage,
  EditRecipePage,
  FeedbackPage,
  HomePage,
  IssuesPage,
  NotFoundPage,
  ProfilePage,
  RecipeDetailPage,
  SavedRecipesPage,
  SearchCategoryPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { Toaster } from "./components/ui/sonner";
function App() {
  const pages = [
    { path: "/", element: <HomePage /> },
    { path: "/about-us", element: <AboutUsPage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/category", element: <SearchCategoryPage /> },
    { path: "/contact-us/feedback", element: <FeedbackPage /> },
    { path: "/contact-us/issues", element: <IssuesPage /> },
    { path: "/recipes/:id", element: <RecipeDetailPage /> },

    { path: "/sign-in", element: <SignInPage /> },
    { path: "/sign-up", element: <SignUpPage /> },
    // user
    { path: "/profile", element: <ProfilePage /> },
    { path: "/profile/accout-setting", element: <AccSettingPage /> },
    { path: "/profile/recipes/edit/:id", element: <EditRecipePage /> },
    { path: "/profile/recipes/create", element: <CreateRecipesPage /> },
    { path: "/profile/recipes/saved", element: <SavedRecipesPage /> },
    // fallback
    { path: "*", element: <NotFoundPage /> },
  ];
  return (
    <main className=" bg-[#fafafa]">
      <Nav />
      <section className=" sm:container mx-auto ">
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} key={page.path} />
          ))}
        </Routes>
      </section>
      {/* <section className=" container mx-auto space-y-5 pt-5">
        <PopularCard />
        <CategoryCard />
        <div className="flex items-center space-x-3">
          <p>Button</p>
          <PrimaryBtn>Primary</PrimaryBtn>
          <OutlineBtn>Outline</OutlineBtn>
          <IconBtn tooltipContent="save">
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
        </div>
        <div className="flex space-x-3 flex-wrap">
          <FoodCard />
          <SavedCard />
        </div>
        <br />
      </section> */}
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;
