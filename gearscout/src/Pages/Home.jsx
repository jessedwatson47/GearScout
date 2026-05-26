import FeatureSection from "../Components/FeatureSection/FeatureSection";
import Hero from "../Components/Hero/Hero";

function Home() {
  return (
    <section className="flex flex-col gap-8">
      <Hero />
      <FeatureSection />
    </section>
  );
}

export default Home;
