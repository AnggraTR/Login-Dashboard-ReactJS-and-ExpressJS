import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alamat</h3>
            <p>Jl. Contoh No. 123</p>
            <p>Jakarta Pusat, 12345</p>
            <p>Indonesia</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <p>Telepon: +62 123 4567 890</p>
            <p>Email: info@contoh.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Nama Perusahaan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
