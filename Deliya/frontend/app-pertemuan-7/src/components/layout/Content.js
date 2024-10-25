import React from "react";
import { FaChartPie, FaUsers, FaAppleAlt } from "react-icons/fa";
import { Bar } from "react-chartjs-2"; // Import Bar dari react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Content() {
  // Data untuk diagram
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Penjualan Jeruk (kg)",
        data: [300, 450, 200, 500, 400, 600, 700], // Data penjualan per bulan
        backgroundColor: "rgba(255, 165, 0, 0.6)", // Warna latar belakang
      },
    ],
  };

  // Opsi untuk diagram
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistik Penjualan Barang",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header Dashboard */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Dashboard</h1>
      </header>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Kartu Statistik */}
        <div className="bg-orange-200 p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <FaChartPie className="text-4xl text-orange-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Statistik Penjualan</h2>
              <p className="text-gray-700">Total Penjualan: 1200 barang</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-200 p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <FaUsers className="text-4xl text-orange-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Pengguna Aktif</h2>
              <p className="text-gray-700">Total Pengguna: 450</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-200 p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <FaAppleAlt className="text-4xl text-orange-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Produksi barang</h2>
              <p className="text-gray-700">Jeruk Terproduksi: 3000 kg</p>
            </div>
          </div>
        </div>
      </div>

    

      {/* Bagian Tambahan */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Selamat Datang </h2>
        <p className="text-gray-700">
          Aplikasi ini memberikan informasi terkait penjualan pada toko orange. 
          Anda dapat memantau statistik penjualan dan pengguna secara real-time.
        </p>
      </div>
        {/* Diagram Penjualan */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <Bar data={data} options={options} /> {/* Menambahkan diagram */}
      </div>
    </div>
  );
}

export default Content;
