import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-[#272727]">
      <div className="flex items-center justify-between px-4 py-2">
        
        {/* Logo */}
        {!showSearch && (
          <Link to="/" className="flex items-center gap-1">
            <span className="text-red-600 text-3xl font-black">▶</span>
            <span className="text-white text-xl font-bold">YouTube</span>
          </Link>
        )}

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 w-[40%]">
          <div className="flex w-full rounded-full overflow-hidden border border-[#303030] focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] text-white px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#272727] px-4 py-2 text-white hover:bg-[#3f3f3f] transition-colors"
            >
              🔍
            </button>
          </div>
        </form>

        {/* Mobile Search - Expanded */}
        {showSearch && (
          <form onSubmit={handleSearch} className="flex md:hidden items-center gap-2 flex-1 ml-2">
            <div className="flex w-full rounded-full overflow-hidden border border-[#303030] focus-within:border-blue-500">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#121212] text-white px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-[#272727] px-4 py-2 text-white hover:bg-[#3f3f3f] transition-colors"
              >
                🔍
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="text-white text-xl px-2"
            >
              ✕
            </button>
          </form>
        )}

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Mobile search toggle */}
          {!showSearch && (
            <button
              onClick={() => setShowSearch(true)}
              className="md:hidden text-white text-xl hover:text-red-500 transition-colors"
            >
              🔍
            </button>
          )}
          <button className="text-white text-2xl hover:text-red-500 transition-colors hidden sm:block">
            🎤
          </button>
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold cursor-pointer">
            U
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;