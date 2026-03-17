import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">MyTube</h2>
      <input type="text" placeholder="Search..." className="search" />
    </div>
  );
};

export default Navbar;