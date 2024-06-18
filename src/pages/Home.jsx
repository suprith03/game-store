import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Favourite from "../components/TrendingGames";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/gta6.jpg";


function Home() {
  return (
    <>
       <Banner
        title="Upcoming in 2025 - Grand Theft Auto VI"
        text ="A new open-world game developed by Rockstar Games. Grand Theft Auto VI is an action-adventure game set in the fictional open world state of Leonida—based on Florida—which includes Vice City, a fictionalised version of Miami."
        img={Banner1}
      />
      <Favourite />
      <TrendingSlider />
      <Footer />
    </>
  );
}

export default Home;