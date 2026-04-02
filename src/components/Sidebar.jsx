import { Link } from "react-router-dom";

const sidebarLinks = [
  { icon: "", label: "Home", path: "/" },
  { icon: "", label: "Shorts", path: "/search/shorts" },
  { icon: "", label: "Subscriptions", path: "/search/subscriptions" },
  { icon: "", label: "Library", path: "/search/library" },
  { icon: "", label: "History", path: "/search/history" },
  { icon: "", label: "Your videos", path: "/search/your videos" },
  { icon: "", label: "Watch later", path: "/search/watch later" },
  { icon: "", label: "Liked videos", path: "/search/liked videos" },
];

const exploreLinks = [
  { icon: "", label: "Trending", path: "/search/trending" },
  { icon: "", label: "Shopping", path: "/search/shopping" },
  { icon: "", label: "Music", path: "/search/music" },
  { icon: "", label: "Movies", path: "/search/movies" },
  { icon: "", label: "Live", path: "/search/live" },
  { icon: "", label: "Gaming", path: "/search/gaming" },
  { icon: "", label: "News", path: "/search/news" },
  { icon: "", label: "Sports", path: "/search/sports" },
];

const Sidebar = ({ sidebarOpen }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden md:flex flex-col overflow-y-auto h-[calc(100vh-56px)] bg-[#0f0f0f] shrink-0 py-2 transition-all duration-300
        ${sidebarOpen ? "w-[240px]" : "w-[72px]"}`}
      >
        {/* Main Links */}
        <div className="flex flex-col gap-1 px-2 pb-4 border-b border-[#272727]">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="flex items-center gap-4 px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-[#272727] transition-colors"
            >
              <span className="text-xl shrink-0">{link.icon}</span>
              {sidebarOpen && <span className="whitespace-nowrap">{link.label}</span>}
            </Link>
          ))}
        </div>

        {/* Explore Section - only when open */}
        {sidebarOpen && (
          <div className="flex flex-col gap-1 px-2 py-4 border-b border-[#272727]">
            <p className="text-white font-bold px-3 mb-2">Explore</p>
            {exploreLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="flex items-center gap-4 px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-[#272727] transition-colors"
              >
                <span className="text-xl shrink-0">{link.icon}</span>
                <span className="whitespace-nowrap">{link.label}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Footer - only when open */}
        {sidebarOpen && (
          <div className="px-5 py-4 text-[#aaaaaa] text-xs flex flex-col gap-1">
            <p>About Press Copyright</p>
            <p>Contact us Creators</p>
            <p>Advertise Developers</p>
            <p className="mt-2">© 2026 Google LLC</p>
          </div>
        )}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f0f0f] border-t border-[#272727] flex justify-around py-2 px-1">
        {sidebarLinks.slice(0, 5).map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-xs text-[#aaaaaa] hover:text-white transition-colors"
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;