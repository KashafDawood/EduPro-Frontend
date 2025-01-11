import React, { useState } from "react";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logout from "../../APIs/UserAPI/logout"; // Import the logout function
import { useNavigate } from "react-router";
import { useUserStore } from "@/store/userStore";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const { clearUser } = useUserStore();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = async () => {
    await logout();
    clearUser();
    navigate("/");
  };

  const menuItems = [
    { icon: <FiHome />, name: "Home" },
    { icon: <FiUser />, name: "Profile" },
    { icon: <FiSettings />, name: "Settings" },
  ];

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`${
          isExpanded ? "w-64" : "w-10"
        } bg-green-800 text-white h-screen transition-all duration-300`}
      >
        {/* Menu Items */}
        <ul className="mt-4 space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-green-700 cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              {isExpanded && <span className="text-sm">{item.name}</span>}
            </li>
          ))}
          <li
            className="flex items-center gap-4 p-2 hover:bg-green-700 cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-xl">
              <FiLogOut />
            </span>
            {isExpanded && <span className="text-sm">Logout</span>}
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute bg-green-800 text-white w-4 h-12 flex items-center justify-center hover:bg-green-700 transition-all duration-300 top-[1.5%]"
        style={{
          left: isExpanded ? "16rem" : "2.5rem", // Adjust position based on sidebar state
        }}
      >
        {isExpanded ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </div>
  );
};

export default Sidebar;
