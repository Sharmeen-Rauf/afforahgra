import HeroScene from "@/components/HeroScene";
import CollectionGrid from "@/components/CollectionGrid";
import BookSection from "@/components/BookSection";
import NewCollectionManuscript from "@/components/NewCollectionManuscript";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <HeroScene />
      <CollectionGrid />
      <BookSection />
      <NewCollectionManuscript />
      <BrandStory />
      <Footer />
    </main>
  );
}

