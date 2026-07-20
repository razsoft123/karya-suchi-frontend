export default function ForgotPassword() {
  return (
    <div className="w-[320px] font-inter bg-app-fg border border-app-border shadow-lg  rounded-xl px-4 py-4">
      <div className="w-full">
        <p className="font-inter w-full text-center text-3xl font-bold py-4">
          Forgot Password
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full text-sm text-slate-600 flex flex-col gap-1">
          <label className="text-center">
            Enter your email ID to find your account
          </label>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">Email ID:</label>
          <input
            className="font-inter border border-slate-400 rounded-md px-2 py-1"
            type="email"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="border-2 cursor-pointer text-white bg-black hover:bg-white hover:text-black hover:duration-300 px-4 py-2 rounded-lg"
            type="submit"
          >
            Find Account
          </button>
        </div>
      </div>
    </div>
  );
}
