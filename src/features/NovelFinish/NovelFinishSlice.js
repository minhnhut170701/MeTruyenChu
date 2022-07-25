import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import NovelFinishService from "./NovelFinishService";

const initialState = {
    data: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getDataFinish = createAsyncThunk('getFinish/all', async(_,thunkAPI) =>{
    try {
        return await NovelFinishService.getDataFinish()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const NovelFinishSlice = createSlice({
    name: 'finishNovel',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDataFinish.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataFinish.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload

        })
        .addCase(getDataFinish.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = NovelFinishSlice.actions
export default NovelFinishSlice.reducer