import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { doesUserExists } from "../utils/auth";
import { useContext } from "react";
import { MyStore } from "../context/MainContext";
import toast from "react-hot-toast";

const LoginForm = () => {

    const { users, setLogUser } = useContext(MyStore);
    const navigate = useNavigate();

    const { reset, handleSubmit, formState: {errors}, register, watch } = useForm({
      mode: "onTouched"
    });

    const loginFormHandler = (data) => {
      const user = doesUserExists(users, data);
      if (!user || user.password !== data.password) {
        return toast.error("Invalid Email or Password!", {
          position: "top-right"
        })
      }
      setLogUser(user);
      localStorage.setItem("logUser", JSON.stringify(user));
      reset();
      toast.success("Logged In Successfully!", {
        position: "top-right"
      });
      return navigate("/home", { replace: true });
    }

    return (
      <div className="bg-[#151515] flex items-center h-full justify-center px-10 py-16 min-w-[50%]">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-extrabold text-white uppercase">
            Welcome Back
          </h2>

          <div className="w-16 h-1 bg-red-500 mt-3 rounded-full"></div>

          <p className="text-zinc-500 mt-4">
            Login to continue shopping your favourite fashion.
          </p>

          <form onSubmit={handleSubmit(loginFormHandler)} className="mt-10 space-y-6">

            <div>
              <label className="text-sm text-zinc-400 uppercase tracking-wide">
                Email Address
              </label>

              <input
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                  message: "Please Enter a valid email address"
                }
              })}
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full bg-[#1e1e1e] border-b-2 border-red-500 px-4 py-4 outline-none text-white placeholder:text-zinc-500"
              />

              {errors.email && 
                <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                  {errors.email.message}
                </p>
              }
            </div>

            <div>
              <label className="text-sm text-zinc-400 uppercase tracking-wide">
                Password
              </label>

              <input
                 {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6, 
                    message: "Password must be at least 6 characters long"
                  }, 
                  maxLength: {
                    value: 15, 
                    message: "Password cannot exceed 15 characters"
                  }, 
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, 
                    message: "Password must be at least of 6 chars and include 1 uppercase, 1 number, and 1 special character",
                  },
                  validate: {
                    noSpaces: (value) => !/\s/.test(value) || "Password cannot contain spaces"
                  }
                })}
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full bg-[#1e1e1e] border-b-2 border-red-500 px-4 py-4 outline-none text-white placeholder:text-zinc-500"
              />

              {errors.password && 
                <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                  {errors.password.message}
                </p>
              }
            </div>

            <button
              className="w-full bg-red-500 hover:bg-red-600 transition text-black font-bold uppercase tracking-widest py-4 mt-4"
            >
              Login →
            </button>
          </form>

          <p className="text-center text-zinc-500 mt-10">
            Don't have an account?{" "}
            <NavLink to={"/register"} className="text-red-500 font-semibold">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    );
};

export default LoginForm;