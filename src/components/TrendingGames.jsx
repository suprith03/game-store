import ProductItem from "./ProductItem";
import "./ProductItem.jsx"
import "./TrendingGames.css";

function TrendingGames() {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Popular Games </h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingGames;
