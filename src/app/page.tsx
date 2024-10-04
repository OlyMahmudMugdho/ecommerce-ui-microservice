import Cover from "@/components/Cover";
import CategoriesSection from "@/components/homepage/CategoriesSection";
import HeroSection from "@/components/homepage/HeroSection";


export default function Home() {
  return (
    <section className="px-4 md:px-8 py-4">
      <Cover />
      <HeroSection />
      <div className="my-4">
        <h1 className="text-4xl text-center py-8 font-bold">
          We sell all of these!
        </h1>
        <CategoriesSection />
      </div>
    </section>
  );
}
