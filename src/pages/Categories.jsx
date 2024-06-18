import "../components/TrendingGames.css";
import CategoriesHeader from "../components/CategoriesHeader";
import { Outlet } from "react-router";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
