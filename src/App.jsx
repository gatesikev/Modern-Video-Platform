import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";

function App() {
  const [selected, setSelected] = useState("Coding");

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar selected={selected} setSelected={setSelected} />
        <Feed selected={selected} />
      </div>
    </div>
  );
}

export default App;