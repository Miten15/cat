import HeroSection from "@/components/HeroSection";
import { Trending } from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Trending />
    </main>
  );
}
