import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    brandval:[],
    categoryval:[],
}


const filterslice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        togglebrand:(state,action)=>{
            const {brand,checked}=action.payload;
            if(checked){
                state.brandval.push(brand);
            }else{
                state.brandval=state.brandval.filter((b)=>b!==brand)
            }
        },
        toggleCategory:(state,action)=>{
            const {category,checked}= action.payload;
            if(checked){
                state.categoryval.push(category);
            }
            else{
                state.categoryval=state.categoryval.filter((c)=>c!==category)
            }
        },

        resetfilter:(state)=>{
            state.brandval = [];
            state.categoryval=[];
        },
    }
})

export const {togglebrand,toggleCategory,resetfilter}=filterslice.actions;
export default filterslice.reducer;