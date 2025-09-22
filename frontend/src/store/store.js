import {configureStore} from '@reduxjs/toolkit'
import filterslice from './slices/filterslice'


const store = configureStore({
    reducer:{
        filter:filterslice,
    },
})

export default store