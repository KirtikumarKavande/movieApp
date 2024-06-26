import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
