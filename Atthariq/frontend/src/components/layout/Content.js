import React from "react";

function Content() {
    return (
        <div className="flex-1 p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">Selamat datang di dashboard</h1>
            {/* Tambahkan konten dashboard di sini */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Card 1</h2>
                    <p className="text-gray-600">Informasi tentang Card 1.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Card 2</h2>
                    <p className="text-gray-600">Informasi tentang Card 2.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Card 3</h2>
                    <p className="text-gray-600">Informasi tentang Card 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
