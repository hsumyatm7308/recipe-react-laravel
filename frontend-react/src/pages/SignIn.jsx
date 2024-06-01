import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/PrimaryBtn";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import * as yup from "yup";
import { useState } from "react";
import { useSignInMutation } from "../store/services/endpoints/auth";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/authSlice";
import NotAuthGuard from "../components/guard/NotAuthGuard";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signIn] = useSignInMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is Required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Passowrd should be at least 8 letters"),
  });
  const handleSubmit = async (value) => {
    try {
      const { data } = await signIn(value);
      if (data?.status) {
        toast.success(data?.message);
        dispatch(addUser({ token: data.token, userData: data.user }));
        nav("/");
      }
    } catch (error) {
      toast("Email and Password doesn't match");
      throw new Error("Email and Password doesn't match");
    }
  };
  return (
    <NotAuthGuard>
      <main className="flex items-center justify-center px-3 md:space-x-[83px]  w-full h-screen ">
        <section className=" hidden lg:block">
          <img
            src="/loginPhoto.jpg"
            alt=""
            className=" w-[735px]  h-[746px] rounded-[29px]"
          />
        </section>
        <section className=" w-[455px]">
          <div className="flex flex-col items-center  space-y-6 mb-[52px]">
            <h5 className=" text-lg text-center">Welcome to Chak Kya Mal</h5>
            <div className=" bg-second h-[60px] rounded-full flex items-center w-[329px]">
              <Link to="/sign-in">
                <PrimaryBtn className=" rounded-full h-10 w-[146px] hover:bg-main/90 hover:text-white  m-[10px] mr-[45px]">
                  Login
                </PrimaryBtn>
              </Link>
              <Link to="/sign-up" className="  text-main">
                Register
              </Link>
            </div>
          </div>
          <p className=" text-textGray text-base mb-[32px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({
              handleBlur,
              handleChange,
              values,
              isSubmitting,
              errors,
              touched,
            }) => (
              <>
                <Form>
                  <section
                    className={`${errors.email ? " mb-2" : "mb-[30px]"} `}
                  >
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      className={`px-7 rounded-[20px] my-[11px] border-main  focus-visible:ring-main h-[54px] ${
                        errors.email && touched.email && " border-danger"
                      }`}
                      placeholder="Enter your email address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    <ErrorMessage
                      component={"p"}
                      className=" text-sm text-danger"
                      name="email"
                    ></ErrorMessage>
                  </section>

                  <section
                    className={`relative ${
                      errors.password ? " mb-2" : "mb-[30px]"
                    } `}
                  >
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className={`px-7 rounded-[20px] my-[11px] border-main  focus-visible:ring-main h-[54px] ${
                        errors.password && touched.password && " border-danger"
                      }`}
                      placeholder="Enter your password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className=" rounded-full absolute top-[42px] right-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                        </svg>
                      )}
                    </Button>
                    <ErrorMessage
                      component={"p"}
                      className=" text-sm text-danger"
                      name="password"
                    ></ErrorMessage>
                  </section>
                  <div className="flex justify-between items-center text-textGray text-sm tracking-wider mb-[33px]">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <p className=" ">Remember me</p>
                    </div>
                    <p>Forget Password?</p>
                  </div>
                  <div className=" flex justify-center sm:justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className=" w-[232px] rounded-[20px] bg-main hover:bg-main/90 h-[49px]"
                    >
                      {isSubmitting ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className=" animate-spin w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </section>
      </main>
    </NotAuthGuard>
  );
};

export default SignIn;
