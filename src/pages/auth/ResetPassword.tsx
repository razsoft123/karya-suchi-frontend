export default function ResetPassword() {
  return (
    <div className="font-inter w-[320px] bg-app-fg border-app-border borde shadow-lg  rounded-xl px-4 py-4">
      <div className="w-full">
        <p className="font-inter w-full text-center text-3xl font-bold py-4">
          Reset Password
        </p>
      </div>
      <div className="flex flex-col gap-4 font-inter">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">Enter New Password: </label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            type="email"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold text-sm">
            Confirm New Password:{" "}
          </label>
          <input
            className="border border-slate-400 rounded-md px-2 py-1"
            type="email"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-5 mb-4">
          <button
            className="font-inter bg-black text-white border-2 cursor-pointer hover:bg-white hover:text-black hover:duration-300 px-4 py-2 rounded-lg"
            type="submit"
          >
            Set New Password
          </button>
        </div>
      </div>
    </div>
  );
}
