import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const colorbg = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum && albumId) {
      displayRef.current.style.background = `linear-gradient(${colorbg}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0 text-white"
    >
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
