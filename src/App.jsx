import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [selected, setSelected] = useState("All");

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar selected={selected} setSelected={setSelected} />
        <div style={{ padding: "20px" }}>
          <h2>{selected} Videos</h2>
        </div>
      </div>
    </div>
  );
}

export default App;