import {useParams} from 'react-router-dom'
import { getProductbyId } from '../../hooks/api/product/getProductbyId';

const ProductDetails = () => {
  
  const {id} = useParams();

  const {data , isFetching , isError}=getProductbyId(id);
  console.log('Fetched data:', data); // Check what’s inside

  console.log("name",data);



  return (
    <div className='container max-w-[1300px] pl-[25px] pr-[25px] mt-[80px] '>
      {/* row  */}
        <div className='flex items-center flex-wrap content-around'>
            {/* col 1 */}
            <div className='basis-[50%] min-w-[50%] p-[20px]'>
               <img className='max-w-[100%] p-0'
                src={data?.images[0]} alt="image"  width="100%"/>
            </div>
             {/* col 2  */}
            <div className='basis-[50%] min-w-[50%] p-[20px]'>
                <p >Home / T-Shirt</p>
                <h1 className='text-5xl'>{data?.name}</h1>
                <h4 className='m-[20px] text-2xl font-bold'>{data?.price}</h4>
                <select className='block p-[10px] mt-[20px] border border-red-400'>
                  <option >S</option>
                  <option >M</option>
                  <option >XL</option>
                  <option >Medium</option>
                </select>
                <input type="number" value={"1"} className='w-[50px] h-[40px] pl-[10px] text-[20px] ml-[10px] border border-red-400'/>
                <a href=""  className='inline-block bg-[#ff523b] text-white p-[10px]
                m-[10px] rounded-[30px]'
                >Add to Cart</a>
                <h3>Product Details</h3>
                <p>{data?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
