import React from "react";

function SideBar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-auto p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">News</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
