import ProductFilter from "../../components/products/ProductFilter"
import ProductList from "../../components/products/ProductList"


const ProductPage = () => {
  return (
    <div className='flex'>
       <aside className='w-1/4'>
           <ProductFilter/>
       </aside>
       <main className="w-3/4">
          <ProductList/>
       </main>
    </div>
  )
}

export default ProductPage
