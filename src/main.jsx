import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
);