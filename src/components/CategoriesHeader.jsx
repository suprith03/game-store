import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesHeader.css";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <IconChevronLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}><button>All</button>
            </Link>
            <Link to="action">
              <button onClick={() => handleBtnName("action")}>Action</button>
            </Link>
            <Link to="adventure">
              <button onClick={() => handleBtnName("adventure")}>Adventure</button>
            </Link>
            <Link to="Horror">
              <button onClick={() => handleBtnName("horror")}>Horror</button>
            </Link>
            
            <Link to="simulation">
              <button onClick={() => handleBtnName("simulation")}>Simulation</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
