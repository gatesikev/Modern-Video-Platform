import "./Sidebar.css";

const categories = ["All", "Music", "Gaming", "Coding", "News"];

const Sidebar = ({ selected, setSelected }) => {
  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => setSelected(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;