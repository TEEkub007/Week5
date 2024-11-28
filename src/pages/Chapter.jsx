import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Chapter = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course/" + id);
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, [id]);

  return (
    <div className="bg-gradient-to-r from-zinc-900 to-cyan-950 flex justify-center min-h-screen gap-5">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text p-10">
          คลิปวิดิโอการสอน
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((c) => (
            <button
              key={c.ch_id}
              onClick={() => setSelectedChapter(c)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-800 text-white transition duration-300 shadow-md hover:shadow-xl rounded-lg p-4"
            >
              {c.ch_title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 w-full max-w-2xl">
        {selectedChapter && (
          <>
            <CourseCard {...selectedChapter} />
            <NavLink to="/">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-800 px-5 py-3 mt-5 text-white shadow-lg transition duration-300 rounded-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                กลับไปหน้าแรก
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-pink-800 rounded-lg shadow-md p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">{props.ch_title}</h2>
      <iframe
        className="rounded-lg w-full aspect-video"
        src={"https://www.youtube.com/embed/" + props.ch_url}
        title={props.ch_title}
      ></iframe>
      <div className="flex justify-between mt-4 text-pink-200">
        <span>{props.ch_view.toLocaleString()} Views</span>
        <span>{props.ch_timetotal} Minutes</span>
      </div>
    </div>
  );
};

export default Chapter;
