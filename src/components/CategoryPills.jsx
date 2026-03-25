import { useRef } from "react";
import { categories } from "../utils/constants";

const CategoryPills = ({ selectedCategory, setSelectedCategory }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center gap-2 mb-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex shrink-0 bg-[#272727] hover:bg-[#3f3f3f] text-white rounded-full w-8 h-8 items-center justify-center transition-colors"
      >
        ◀
      </button>

      {/* Pills */}
      <div
        ref={rowRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
              ${selectedCategory === category.name
                ? "bg-white text-black"
                : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
              }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex shrink-0 bg-[#272727] hover:bg-[#3f3f3f] text-white rounded-full w-8 h-8 items-center justify-center transition-colors"
      >
        ▶
      </button>
    </div>
  );
};

export default CategoryPills;