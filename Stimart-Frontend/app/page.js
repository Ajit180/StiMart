import HeaderSlider from "@/components/HeaderSlider";
import ProductList from "@/components/Productlist";


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
