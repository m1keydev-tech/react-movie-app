import FeatureMovie from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TRENDING_TABS, TOP_RATED_TABS } from "../libs/constants";

function Homepage() {
  return (
    <>
      <FeatureMovie />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </>
  );
}

export default Homepage;
