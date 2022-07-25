import { configureStore } from "@reduxjs/toolkit"
import NovelHotReducer from "../features/NovelHot/NovelHotSlice"
import NovelTopReducer from "../features/NovelTop/NovelTopSlice"
import NovelNewUpdateReducer from "../features/NovelNewUpdate/NovelNewUpdateSlice"
import NovelFinishReducer from "../features/NovelFinish/NovelFinishSlice"
export const store = configureStore({
    reducer:{
        novelHot: NovelHotReducer,
        novelTop: NovelTopReducer,
        novelUpdate: NovelNewUpdateReducer,
        finishNovel: NovelFinishReducer,
    },
})