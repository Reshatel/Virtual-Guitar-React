import React, { useState, useEffect } from "react";
import "./Tabs.css";


const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredTab, setFilteredTab] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/tabs.json")
      .then((res) => res.json())
      .then((data) => setTabs(data))
      .catch((err) => console.error("Error", err));
  }, []);

  const handleSearch = () => {
    const foundTab = tabs.find((tab) =>
      tab.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setFilteredTab(foundTab || null);
  };

  return (
    <div id="tabs-section" className="tabs-section">
      <h2>Find TABs</h2>
      <input
        type="text"
        placeholder="Enter the name of the song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔎 Find</button>

      {filteredTab ? (
        <div className="tab-display">
          <h3>{filteredTab.title} - {filteredTab.artist}</h3>

          <pre>{Array.isArray(filteredTab.tab) ? filteredTab.tab.join("\n") : filteredTab.tab}</pre>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Tabs;
