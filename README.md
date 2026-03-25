# 🎬 Modern Video Platform

A production-grade YouTube clone built with React, TanStack Query, and the YouTube v3 API via RapidAPI.

🔗 **Live Demo:** [Add your deployment URL here]

---

## 🛠️ Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Tailwind CSS v3** — Styling
- **React Router DOM** — Page routing
- **Axios** — HTTP requests
- **TanStack Query** — Data fetching & caching
- **React Player** — Video playback

---

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx        # Sticky top navigation with search
│   ├── Sidebar.jsx       # Category sidebar + mobile bottom nav
│   ├── VideoCard.jsx     # Reusable video thumbnail card
│   ├── ChannelCard.jsx   # Reusable channel display card
│   ├── VideoPlayer.jsx   # YouTube iframe video player
│   ├── Loader.jsx        # Spinning loader indicator
│   └── CategoryPills.jsx # Horizontal category filter pills
├── pages/
│   ├── Feed.jsx          # Main landing page with video grid
│   ├── VideoDetails.jsx  # Video playback page with related videos
│   ├── ChannelDetails.jsx# Channel profile page
│   └── SearchResults.jsx # Search results page
├── utils/
│   ├── fetchFromAPI.js   # Axios instance with RapidAPI config
│   └── constants.js      # Categories list
├── App.jsx               # Root component with routing
├── main.jsx              # Entry point
└── index.css             # Global styles
```

---

## 🚀 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/gatesikev/Modern-Video-Platform.git
cd Modern-Video-Platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file at the root:
```
VITE_RAPID_API_KEY=your_rapidapi_key_here
```
> Get your free API key at [RapidAPI YouTube v3](https://rapidapi.com/ytdlfree/api/youtube-v31)

### 4. Start the dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✨ Features

- **Feed** — Browse videos by category
- **Video Player** — Watch videos with fullscreen support
- **Channel Pages** — View channel info and their videos
- **Search** — Search for videos and channels
- **Caching** — TanStack Query prevents duplicate API calls
- **Responsive** — Works on mobile, tablet and desktop
- **Error Handling** — Graceful error messages when API fails



## 👩‍💻 Author

Built by Kevine GATESI.