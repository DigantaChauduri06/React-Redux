import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUS = Object.freeze({
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
})

const initialState = {
    data: [],
    status: STATUS.SUCCESS,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUS.SUCCESS;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }

});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// Thunk in react toolkit
export const fetchProducts = createAsyncThunk('product/fetch', async () => {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;  // return data to reducer
})




/*
 Thunk manually

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUS = Object.freeze({
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
})

const initialState = {
    data: [],
    status: STATUS.SUCCESS,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }

    }

});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;



export function fetchProducts() {
    return async (dispatch) => {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const data = await axios('https://fakestoreapi.com/products');
            dispatch(setProducts(data.data));
            dispatch(setStatus(STATUS.SUCCESS))
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            console.log(error);
        }
    }
}
*/

