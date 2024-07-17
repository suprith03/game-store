import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Favourite from "../components/TrendingGames";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/gta6.jpg";
import Banner2 from "../img/banner/godr.jpg";

function Home() {
  return (
    <>
       <Banner
        title="Upcoming in 2025 - Grand Theft Auto VI"
        text ="A new open-world game developed by Rockstar Games. Grand Theft Auto VI is an action-adventure game set in the fictional open world state of Leonida—based on Florida."
        img={Banner1}/>   
      <Favourite />
      <TrendingSlider />
      <BannerReverse
        title="HOT🔥 - God of War Ragnarök"
        text=" God of War Ragnarök is an action-adventure game where Kratos and his son embark on a quest to prevent the coming of Ragnarök."
        img={Banner2}/>
        <br />
        <br />
        <br />
        <br />
        <br />
      <Footer />
    </>
  );
}

export default Home;