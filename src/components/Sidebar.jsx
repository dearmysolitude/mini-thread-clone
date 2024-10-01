import React from "react";
import { Link } from "react-router-dom";
import { House, UserRoundPen } from "lucide-react";
import icon from "../icon.png";

const Sidebar = () => {
  const icons = [
    { Icon: House, label: "Home", link: "/" },
    { Icon: UserRoundPen, label: "Profile", link: "profile" },
  ];
  return (
    <div className="h-screen flex flex-col">
      {/* Logo section */}
      <div className="w-full h-20 flex items-center justify-center">
        <Link to="/" className="flex items-center justify-center">
          <img src={icon} alt="logo" className="h-10 w-auto max-w-full px-2" />
        </Link>
      </div>
      {/* Navigation section */}
      <nav className="flex-grow flex flex-col justify-center">
        <ul className="space-y-6">
          {icons.map((item) => (
            <li key={item.label}>
              <Link
                to={item.link}
                className="block text-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <item.Icon className="w-8 h-8 mx-auto" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
