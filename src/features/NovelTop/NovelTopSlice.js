import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import NovelTopService from "./NovelTopService"
const initialState = {
    dataDC: [],
    dataXN: [],
    dataYT: [],
    dataTD: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//get data đề cử
export const getDataDC = createAsyncThunk("DC/getAll", async(_,thunkAPI) =>{
    try {
        return await NovelTopService.getDataDC()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//get data xem nhiều
export const getDataXN = createAsyncThunk("XN/getAll", async(_,thunkAPI) =>{
    try {
        return await NovelTopService.getDataXN()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})
//get data yêu thích
export const getDataYT = createAsyncThunk("YT/getAll", async(_,thunkAPI) =>{
    try {
        return await NovelTopService.getDataYT()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//get data theo dõi nghiều
export const getDataTD = createAsyncThunk("TD/getAll", async(_,thunkAPI) =>{
    try {
        return await NovelTopService.getDataTD()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const NovelTopSlice = createSlice({
    name:'novelTop',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getDataDC.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataDC.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.dataDC = action.payload

        })
        .addCase(getDataDC.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDataXN.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataXN.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.dataXN = action.payload

        })
        .addCase(getDataXN.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDataYT.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataYT.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.dataYT = action.payload

        })
        .addCase(getDataYT.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDataTD.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataTD.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.dataTD = action.payload

        })
        .addCase(getDataTD.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }


})

export const {reset} = NovelTopSlice.actions
export default NovelTopSlice.reducer