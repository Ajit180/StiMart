import { useEffect, useState } from 'react';
import slider1 from '../assets/banner.png'
import slider2 from '../assets/banner2.png'
import slider3 from '../assets/banner3.png'

import { getCategory } from "../hooks/api/category/useGetCategory";

const Hero = () => {

    const [index , setindex]=useState(0);
   
     const { data,isLoading,isError,isSuccess}=getCategory();
     console.log("the data is fetched by the get all category",data?.category);

       const slider = [
           {
             id:1,
             image:slider1,
             name:"Mobile"
           },
           {
            id:2,
            image:slider2,
            name:"Books"
           },
           {
            id:3,
            image:slider3,
            name:"BasketBall"
           }
       ]
       

       function handlerinc(){
          setindex(prev=>{
            if(prev!=slider.length-1){
              return prev+1;
            }
            else{
              return 0;
            }
          })
         
       }

       function handlerdec(){
        setindex(prev=>{
          if(prev!=slider.length-1){
            return Math.max(prev-1,0);
          }
          else{
            return 0;
          }
        })
       }

        

  return (
    <div className="flex flex-col md:flex-row px-8 py-6 gap-6 bg-white">
      {/* Left Side: Categories */}

     <div className="w-full md:w-1/4">
         <ul className="space-y-3 text-gray-700 font-medium overflow-x-auto md:overflow-visible whitespaces-nowrap md:whitespace-normal">
            {data?.category.map((cat,idx)=>(
              <li key={idx}>{cat.name}</li>
            ))}
         </ul>
     </div>


      {/* Vertical Border */}
      <div className="w-px bg-gray-300 mx-6"></div>

      {/* Right Side: Hero Image Slider */}
      <div className="w-full md:flex-1">
        <img
          src={slider[index].image}
          alt="Slider"
          className="w-full h-auto rounded-md shadow md:w-[892px] md:h-[344px]"
        /><span>{slider[index].name}</span> 
      </div>
      <div>
         <button onClick={()=>handlerinc()}>Next</button> 
         <button onClick={()=>handlerdec()}>Prev</button>
      </div>
    </div>
  );
};

export default Hero;
