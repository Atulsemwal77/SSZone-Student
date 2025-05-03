import React from "react";
import img1 from "../assets/img.jpg";

import { FaBook, FaUserGraduate, FaMoneyBillWave } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  { course: "JavaScript", enrolled: "1,200", rating: 4.1 },
  { course: "PHP", enrolled: "1,500", rating: 3.9 },
  { course: "Graphics Designer", enrolled: "2,500", rating: 4.7 },
  { course: "Data Science", enrolled: "2,290", rating: 4.5 },
];

const Overview = () => {
  return (
    <>
    {/* <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-10 rounded-xl flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img
            src={img1}
            alt=""
            className="rounded-full w-20 border-4 border-white"
          />
          <div>
            <p className="text-sm">Hello</p>
            <h2 className="text-xl ">Michele Obema</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1 text-lg">
          <FaStar className="text-yellow-300" />
          4.0 (120 Reviews)
        </div>

        <button className=" text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 border border-white">
          Create a New Course <FaArrowRight />
        </button>
    </div> */}

      <p className="font-semibold text-lg mb-2">Summary</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaBook className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">27</h3>
            <p className="text-gray-500 text-sm">Total Courses</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
          <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaUserGraduate className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">08</h3>
            <p className="text-gray-500 text-sm">Total Students</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaMoneyBillWave className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">12</h3>
            <p className="text-gray-500 text-sm">Total Earning</p>
          </div>
        </div>
      </div>

      {/* Courses Enrolled Status (Placeholder) */}
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Courses Enrolled Status</h3>
          <select className="border px-2 py-1 rounded">
            <option>HTML</option>
            <option>CSS</option>
            <option>React</option>
          </select>
        </div>
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          [Chart Placeholder]
        </div>
      </div>

      <div className=" p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Feedbacks</h2>

      {/* Header Row */}
      <div className="flex font-medium bg-blue-100 p-2 rounded-t-md">
        <div className="w-1/3 px-2">Course Name</div>
        <div className="w-1/3 px-2">Enrolled</div>
        <div className="w-1/3 px-2">Rating</div>
      </div>

      {/* Feedback Rows */}
      {feedbacks.map((item, index) => (
        <div
          key={index}
          className={`flex p-2 ${
            index % 2 === 1 ? "bg-blue-50" : ""
          } border-b`}
        >
          <div className="w-1/3 px-2">{item.course}</div>
          <div className="w-1/3 px-2">{item.enrolled}</div>
          <div className="w-1/3 px-2 flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {item.rating}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Overview;
