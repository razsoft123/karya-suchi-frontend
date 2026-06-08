import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegisterMutation } from "../../queries/registerMutation";
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
    <div className="w-[320px] border border-slate-500 shadow-lg  rounded-xl px-4 py-4">
      <div className="w-full">
        <p className="w-full text-center text-2xl font-semibold">Register</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-1">
          <label>Full Name:</label>
          <input
            className="border rounded-md px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Email ID:</label>
          <input
            className="border rounded-md px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Password:</label>
          <input
            className="border rounded-md px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="border-2 cursor-pointer hover:bg-black hover:text-white hover:duration-300 px-4 py-2 rounded-lg"
            type="submit"
            onClick={() => handleRegister()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
