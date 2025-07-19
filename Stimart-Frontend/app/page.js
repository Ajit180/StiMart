import HeaderSlider from "@/components/headerSlider";
import ProductList from "@/components/productlist";


export default function Home() {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider/>
        <ProductList/>
      </div>
    </>
  );
}
