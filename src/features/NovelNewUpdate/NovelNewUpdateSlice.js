import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import NovelNewUpdateService from "./NovelNewUpdateService"


const initialState = {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getDataUpdate = createAsyncThunk('getUpdate/all', async(_,thunkAPI) =>{
    try {
        return await NovelNewUpdateService.getData()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const NovelNewUpdateSlice = createSlice({
    name: 'novelUpdate',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDataUpdate.pending, (state) =>{
                state.isLoading = true
        })
        .addCase(getDataUpdate.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload

        })
        .addCase(getDataUpdate.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }


})

export const {reset} = NovelNewUpdateSlice.actions
export default NovelNewUpdateSlice.reducer