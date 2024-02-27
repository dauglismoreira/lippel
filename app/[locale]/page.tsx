import { BackgroundSection } from "../components/backgroundSection";
import { HighBlog } from "../components/highBlog";
import { HighProducts } from "../components/highProducts";
import { PrimarySlider } from "../components/primarySlider";

export default function Home() {
  return (
    <main>
      <PrimarySlider/>
      <HighProducts/>
      <BackgroundSection/>
      <HighBlog/>
    </main>
  );
}
