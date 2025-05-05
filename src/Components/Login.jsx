import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center !px-4 !py-8 bg-white">
      <div className="rounded-2xl !p-6 sm:!p-10 w-full max-w-md shadow-xl shadow-gray-200 transition duration-500">
        <h1 className="text-2xl font-semibold !mb-6 text-center">LOGIN</h1>

        <input
          type="text"
          placeholder="USER ID"
          className="block placeholder-[#7bb6b3] tracking-[1px] mx-auto shadow-md shadow-gray-300 rounded-xl !p-4 w-full !mb-4"
            required
        />

        <input
          type="password"
          placeholder="PASSWORD"
          className="block placeholder-[#7bb6b3] tracking-[1px] mx-auto shadow-md shadow-gray-300 rounded-xl !p-4 w-full !mb-4"
            required
        />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 !mt-6">
          <button
            type="submit"
            className="!px-6 !py-2 text-[#7bb6b3] shadow-md text-base shadow-gray-300 rounded-xl w-full sm:w-1/2 transition duration-300 hover:bg-gray-100"
            onClick={()=>{window.alert("Window Under designing.")}}
          >
            LOGIN
          </button>
          <button
            type="button"
            className="!px-6 !py-2 text-[#7bb6b3] shadow-md text-base shadow-gray-300 rounded-xl w-full sm:w-1/2 transition duration-300 hover:bg-gray-100"
            onClick={()=>{window.alert("Window Under designing.")}}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
