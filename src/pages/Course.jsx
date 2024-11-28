import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;

    // เก็บข้อมูลทราอ่านได้ใส่ State
    setData(data_format);
  };

  useEffect(() => {
    // call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center mb-10">
        หลักสูตรการสอนทั้งหมด
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-5 lg:w-[1280px]">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="rounded-t-lg overflow-hidden">
        <img
          src={props.picture}
          alt={props.title}
          className="w-full h-40 md:h-48 lg:h-56 object-cover"
        />
      </div>
      <div className="p-5 text-gray-300">
        <div className="text-2xl font-semibold text-indigo-400 mb-2">
          {props.title}
        </div>
        <div className="text-md text-gray-400">{props.detail}</div>
      </div>
      <div className="flex justify-center p-5">
        <NavLink
          to={"/course/" + props.id}
          className="bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-pink-500 hover:to-red-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
        >
          เนื้อหาในหลักสูตร
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
