import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <main className=" bg-[#fafafa]">
      {!pathname.includes("/sign-") && <Nav />}

      <section className=" sm:container mx-auto ">
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} key={page.path} />
          ))}
        </Routes>
      </section>
      {!pathname.includes("/sign-") && <Footer />}
      <Toaster />
    </main>
  );
}

export default App;
