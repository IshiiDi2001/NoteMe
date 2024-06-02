import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const noSearchBarRoutes = ["/login", "/signUp"];

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  console.log("Current Path:", location.pathname);

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="flex items-center gap-2">
        <img className="h-7" src="public/Favicon.png" alt="Logo" />
        <h2 className="text-xl font-medium text-black py-2">NoteMe</h2>
      </div>

      {!noSearchBarRoutes.includes(location.pathname) && (
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      )}

      {userInfo && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  );
};

export default Navbar;
