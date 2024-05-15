import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0 text-white">
      <Routes>
        <Route path="/Music-Player-Website" element={<DisplayHome />} />
        <Route
          path="/Music-Player-Website/album/:id"
          element={<DisplayAlbum />}
        />
      </Routes>
    </div>
  );
};

export default Display;
