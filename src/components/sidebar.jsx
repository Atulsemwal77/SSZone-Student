

import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdMessage,
  MdRateReview,
  MdQuiz,
  MdSettings,
  MdLogout,
  MdPerson,
} from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";

export default function Dashboard() {
  const linkClass = "flex items-center space-x-2 p-2 rounded hover:bg-blue-100";
  const activeClass = "bg-blue-100 text-blue-600";

  return (
    <div className=" min-h-screen bg-gray-100 font-sans ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6">
        <nav className="space-y-2 text-gray-600">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdPerson />
            <span>My Profile</span>
          </NavLink>

          <NavLink
            to="/enrollCourse"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <BiBookBookmark />
            <span>Enroll Courses</span>
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdMessage />
            <span>WishList</span>
          </NavLink>

          <NavLink
            to="/message"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <BiBookBookmark />
            <span>Message</span>
          </NavLink>

          <NavLink
            to="/review"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdRateReview />
            <span>Reviews</span>
          </NavLink>

          <NavLink
            to="/myQuiz"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdQuiz />
            <span>My Quiz </span>
          </NavLink>

          <NavLink
            to="/assignments"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <BiBookBookmark />
            <span>Assignment</span>
          </NavLink>

          <hr className="my-4" />

          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdSettings />
            <span>Setting</span>
          </NavLink>

          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <MdLogout />
            <span>Logout</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main content placeholder */}
      <main className="flex-1 p-6 w-full">
        {/* This is where nested routes will render via <Outlet /> in App.jsx */}
      </main>
    </div>
  );
}
