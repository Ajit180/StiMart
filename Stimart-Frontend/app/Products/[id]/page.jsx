import { getProductById } from "@/apis/product";
import ProductClient from "@/components/Product/Product";
import { notFound } from "next/navigation";


const SingleProductPage = async ({ params }) => {
  const { id } = await params;
  const res = await getProductById(id);
  const product = res?.data;

  // if (!product) return <div>Product not found</div>;
   if (!product) notFound(); // ✅ This will render the 404 page instead of breaking

  return <ProductClient product={product} />;
};

export default SingleProductPage;
