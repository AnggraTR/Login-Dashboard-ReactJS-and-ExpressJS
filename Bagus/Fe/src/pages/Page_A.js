import React from 'react';
import Sidebar from '../components/Sidebar';

const PageA = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Welcome to Page A</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            This is a sample content for Page A. You can customize this page as needed for your project.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
            Sample Button
          </button>
        </div>
      </main>
    </div>
  );
};

export default PageA;
