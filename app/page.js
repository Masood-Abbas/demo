import FeaturedSection from "@/components/featureSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import ReviewSection from "@/components/reviews";
import TopTierTravel from "@/components/TopTierTravel";
import TravelNews from "@/components/travelNews";
import WhyUs from "@/components/whyus";
import { featuredCountryData } from "@/utils/static/featuredCountry.Data";
import { featuredHotelsData } from "@/utils/static/featuredHotels.Data";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturedSection data={featuredCountryData} />
    <FeaturedSection data={featuredHotelsData} />
    <WhyUs/>
    <ReviewSection/>
    <TravelNews/>
    <TopTierTravel/>
    <Footer/>
    </>
  );
}
