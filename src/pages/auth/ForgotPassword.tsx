export default function ForgotPassword() {
  return (
    <div className="w-[320px] border border-slate-500 shadow-lg  rounded-xl px-4 py-4">
      <div className="w-full">
        <p className="w-full text-center text-2xl font-semibold">
          Forget Password
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-1">
          <label>Enter your email ID to find your account</label>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Email ID:</label>
          <input className="border rounded-md px-2 py-1" type="email" />
        </div>
        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="border-2 cursor-pointer hover:bg-black hover:text-white hover:duration-300 px-4 py-2 rounded-lg"
            type="submit"
          >
            Find Account
          </button>
        </div>
      </div>
    </div>
  );
}
