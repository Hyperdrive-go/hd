import { Hero } from "./Hero/Hero";
import { TopCollections } from "./TopCollections/TopCollections";
import { FeaturedCreators } from "./FeaturedCreators/FeaturedCreators";
import { Notable } from "./Notable/Notable";

export const Home = () => {
    return (
      <>
        <Hero/>
        <TopCollections/>
        <FeaturedCreators/>
        <Notable/>
      </>
    )
}