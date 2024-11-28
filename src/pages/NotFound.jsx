import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 justify-center min-h-screen">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent text-center p-10">
        ไม่พบหน้าที่ต้องการ
      </h1>
      <div className="flex justify-center">
      <NavLink to="/">
        <button className="flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-indigo-500 hover:from-pink-400 px-5 p-2 mt-5 shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 text-white rounded-xl">
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          กลับไปหน้าแรก
        </button>
      </NavLink>
      </div>
    </div>
  );
};

export default NotFound;