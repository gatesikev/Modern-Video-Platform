import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col gap-1 p-3 overflow-y-auto h-[calc(100vh-56px)] bg-[#0f0f0f] w-[240px] shrink-0">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center gap-4 px-3 py-2 rounded-xl text-sm font-medium transition-colors w-full text-left
              ${selectedCategory === category.name
                ? "bg-white text-black"
                : "text-white hover:bg-[#272727]"
              }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f0f0f] border-t border-[#272727] flex justify-around py-2 px-1">
        {categories.slice(0, 5).map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-xs transition-colors
              ${selectedCategory === category.name
                ? "text-white"
                : "text-[#aaaaaa]"
              }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;