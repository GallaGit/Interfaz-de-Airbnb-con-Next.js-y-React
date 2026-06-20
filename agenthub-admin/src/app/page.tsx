import CategoryList from "@/components/home/CategoryList";
import FeaturedListings from "@/components/home/FeaturedListings";
import HeroSection from "@/components/home/HeroSection";
import { categories, listings } from "@/data/listings";

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <CategoryList categories={categories} />
      <FeaturedListings listings={listings.slice(0, 6)} />
    </div>
  );
}
