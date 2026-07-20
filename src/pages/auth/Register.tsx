import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegisterMutation } from "../../queries/registerMutation";
import { NavLink } from "react-router";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mutation = useRegisterMutation();

  function handleRegister() {
    if (!name) toast.error("Name is required");
    if (!email) toast.error("Email is required");
    if (!password) toast.error("Password is required");

    mutation.mutate(
      {
        name: name,
        email: email,
        password: password,
      },
      {
        onSuccess: () => {
          toast.success("Registration successful");
          navigate("/dashboard");
        },

        onError: (err: Error) => {
          toast.error(err.message || "There is an error");
        },
      },
    );
  }

  return (
    <div className="w-[320px] bg-app-fg border border-app-border font-inter shadow-lg  rounded-xl px-4 py-4">
      {/* <div>
        <span>
          {" "}
          <NavLink to="/">{"<-"} back </NavLink>
        </span>
      </div> */}
      <div className="w-full">
        <p className="font-inter w-full text-center text-3xl font-bold py-4">
          Register
        </p>
      </div>
      <div className="flex flex-col gap-4 font-inter">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">Full Name:</label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">Email ID:</label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">Password:</label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="border-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:duration-300 px-4 py-2 rounded-lg"
            type="submit"
            onClick={() => handleRegister()}
          >
            Register
          </button>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <p className="text-slate-600">
            Don't have and account{" "}
            <NavLink
              className="font-semibold underline text-black"
              to="/auth/login"
            >
              login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
