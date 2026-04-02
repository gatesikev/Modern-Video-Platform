import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import Navbar from "./components/Navbar";
import CategoryPills from "./components/CategoryPills";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails";
import SearchResults from "./pages/SearchResults";

const queryClient = new QueryClient();

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-[#0f0f0f] min-h-screen text-white">
          {/* Navbar */}
          <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

          {/* Category Pills */}
          <div className="sticky top-[56px] z-40 bg-[#0f0f0f] border-b border-[#272727] px-4 py-2">
            <CategoryPills
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Main Layout */}
          <div className="flex">
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/channel/:id" element={<ChannelDetails />} />
                <Route path="/search/:query" element={<SearchResults />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;