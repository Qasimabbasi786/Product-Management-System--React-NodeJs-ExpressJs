import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 text-white shadow-sm">
      <div className="pm-container">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
            Product Manager
          </h1>

          <nav className="flex items-center gap-2">
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              to="/"
            >
              Home
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              to="/add"
            >
              Add Product
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
