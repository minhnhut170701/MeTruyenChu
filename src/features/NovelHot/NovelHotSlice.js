import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import NovelHotService from "./NovelHotService"
const initialState = {
    data: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//get data
export const getData = createAsyncThunk("hot/getAll", async(_,thunkAPI) =>{
    try {
        return await NovelHotService.getData()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const NovelHotSlice = createSlice({
    name:'novelHot',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getData.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getData.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload

        })
        .addCase(getData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }


})

export const {reset} = NovelHotSlice.actions
export default NovelHotSlice.reducer