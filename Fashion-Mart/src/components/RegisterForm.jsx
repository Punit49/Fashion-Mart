import { FiUser, FiMail, FiLock, FiEye } from "react-icons/fi";
import { Navigate, NavLink, useNavigate } from "react-router";
import { useForm, Watch } from "react-hook-form";
import { useContext, useState } from "react";
import { MyStore } from "../context/MainContext";
import { doesUserExists } from "../utils/auth";
import toast from "react-hot-toast";
// Implement toasts - 
const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch
  } = useForm({
    mode: "onTouched",
  });

  const { users, setUsers } = useContext(MyStore);
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
 
  const formHandler = (data) => {
    if(doesUserExists(users, data)){
      return toast.error("User with this email already exists, Please Login", {
        position: "top-right"
      })
    } else {
      const newUsers = [...users, data];
      setUsers(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers));
    }
    reset();
    toast.success("Account Created Please Login!", {
      position: "top-right"
    })
    return navigate("/login");
  }

  return (
    <div className="bg-[#151515] flex items-center justify-center h-full px-10 py-16 min-w-[50%]">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-extrabold uppercase text-white">
          Create Account
        </h2>

        <div className="w-16 h-1 bg-red-500 rounded-full mt-3"></div>

        <p className="text-zinc-500 mt-4">
          Join FashionMart and discover your next favorite outfit.
        </p>

        <form
          onSubmit={handleSubmit(formHandler)}
          className="mt-10 flex flex-col gap-6"
        >
          <div>
            <div className="h-16 rounded-2xl bg-[#1E1E1E] border border-zinc-800 focus-within:border-red-500 transition flex items-center px-5">
              <FiUser className="text-zinc-500 text-xl flex-shrink-0" />

              <input
                {...register("fullname", {
                  required: "Full name is required",
                  minLength: {
                    value: 3, 
                    message: "Name Should must be at least 3 characters long"
                  }, 
                  pattern: {
                    value: /^(?!\s*$).+/, 
                    message: "Blank Spaces are not allowed"
                  }
                })}
                type="text"
                placeholder="Full name"
                className="flex-1 bg-transparent px-4 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>

            {errors.fullname && (
              <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div>
            <div className="h-16 rounded-2xl bg-[#1E1E1E] border border-zinc-800 focus-within:border-red-500 transition flex items-center px-5">
              <FiMail className="text-zinc-500 text-xl flex-shrink-0" />

              <input
                {...register("email", {
                  required: "Email is required", 
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "Please Enter a valid email address"
                  }
                })}
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>
              {
                errors.email && 
                <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                  {errors.email.message}
                </p>
              }
          </div>

          <div>
            <div className="h-16 rounded-2xl bg-[#1E1E1E] border border-zinc-800 focus-within:border-red-500 transition flex items-center px-5">
              <FiLock className="text-zinc-500 text-xl flex-shrink-0" />

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
                type={showPw ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="flex-1 bg-transparent px-4 text-white placeholder:text-zinc-500 outline-none"
              />

              <button
                onClick={() => setShowPw(prev => !prev)}
                type="button"
                className={`hover:text-red-500 transition ${showPw ? "text-red-500" : "text-zinc-500"}`}
              >
                <FiEye size={20} />
              </button>
            </div>

            {
              errors.password && 
              <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                {errors.password.message}
              </p>
            }
          </div>

          <div>
            <div className="h-16 rounded-2xl bg-[#1E1E1E] border border-zinc-800 focus-within:border-red-500 transition flex items-center px-5">
              <FiLock className="text-zinc-500 text-xl flex-shrink-0" />

              <input
                {...register("confirmpassword", {
                  required: "Please confirm your password", 
                  validate: (value) =>  value === watch("password") || "Passwords do not match"
                })}
                type="password"
                placeholder="Confirm password"
                className="flex-1 bg-transparent px-4 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>

            {
              errors.confirmpassword && 
              <p className="text-[#fb2c36] text-sm mt-2 ml-2">
                {errors.confirmpassword.message}
              </p>
            }
          </div>

          <button
            type="submit"
            className="w-full h-16 rounded-2xl bg-red-500 hover:bg-red-600 transition text-black font-bold uppercase tracking-widest cursor-pointer"
          >
            Create Account →
          </button>
        </form>

        <p className="text-center text-zinc-500 mt-8">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;