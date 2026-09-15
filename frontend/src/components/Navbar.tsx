import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Clothing Store
        </Link>

        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}