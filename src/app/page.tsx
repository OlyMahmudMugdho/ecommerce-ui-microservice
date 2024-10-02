import Cover from "@/components/Cover";
import ProductCarousel from "@/components/ProductCarousel";


export default function Home() {
  return (
    <section className="px-4 md:px-8 py-4">
      <Cover />
      <div className="my-4">
        <ProductCarousel />
      </div>
    </section>
  );
}
