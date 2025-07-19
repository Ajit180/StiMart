import { getProductById } from "@/apis/product";
import ProductClient from "@/components/product/product";



const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const res = await getProductById(id);
  const product = res?.data;

  if (!product) return <div>Product not found</div>;

  return <ProductClient product={product} />;
};

export default SingleProductPage;
