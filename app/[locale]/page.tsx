import { BackgroundSection } from "@/components/ui/backgroundSection";
import { HighBlog } from "@/components/ui/highBlog";
import { HighProducts } from "@/components/ui/highProducts";
import { PrimarySlider } from "@/components/primarySlider";

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
