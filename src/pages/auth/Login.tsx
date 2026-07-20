import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../queries/loginMutation";
import { NavLink } from "react-router";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mutation = useLoginMutation();

  const handleLogin = async () => {
    // Validate inputs
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    // Call the mutation
    mutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          toast.success("Login successful!");
          navigate("/dashboard");
        },
        onError: (err) => {
          toast.error(err.message || "Login failed. Please try again.");
        },
      },
    );
  };

  return (
    <div className="w-[320px] bg-app-fg border border-app-border shadow-lg  rounded-xl px-4 py-4">
      <div className="w-full">
        <p className="font-inter w-full text-center text-3xl font-bold py-4">
          Login
        </p>
      </div>
      <div className="flex flex-col gap-4 font-inter">
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
        {/* <div className="w-full">
          <p className="text-right">
            <NavLink to="/auth/forgot-password" className="text-slate-600">
              forgot password?
            </NavLink>
          </p>
        </div> */}
        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="border-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:duration-300 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            onClick={handleLogin}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-slate-600">
            Don't have and account{" "}
            <NavLink
              className="font-semibold underline text-black"
              to="/auth/register"
            >
              register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
