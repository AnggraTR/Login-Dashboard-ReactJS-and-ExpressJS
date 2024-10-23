import React from "react";

function Contents() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Selamat Datang di WST</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
        <p className="text-gray-700 mb-4">
          WST adalah perusahaan teknologi terkemuka yang berfokus pada pengembangan solusi inovatif untuk meningkatkan produktivitas dan efisiensi bisnis. Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Layanan Kami</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Pengembangan Perangkat Lunak Kustom</li>
          <li>Konsultasi IT</li>
          <li>Manajemen Proyek Teknologi</li>
          <li>Integrasi Sistem</li>
          <li>Pelatihan dan Dukungan Teknis</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pengalaman</h3>
            <p className="text-gray-700">Tim kami terdiri dari para ahli dengan pengalaman bertahun-tahun di industri teknologi.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Inovasi</h3>
            <p className="text-gray-700">Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terbaik.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
            <p className="text-gray-700">Kami menjamin kualitas tertinggi dalam setiap proyek yang kami kerjakan.</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dukungan</h3>
            <p className="text-gray-700">Tim dukungan kami siap membantu Anda 24/7 untuk memastikan kepuasan pelanggan.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
        <p className="text-gray-700 mb-4">
          Tertarik untuk bekerja sama dengan kami? Jangan ragu untuk menghubungi tim kami untuk informasi lebih lanjut atau untuk memulai proyek Anda.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Hubungi Kami
        </button>
      </section>
    </div>
  );
}

export default Contents;
