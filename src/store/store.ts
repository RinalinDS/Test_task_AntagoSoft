import {configureStore} from '@reduxjs/toolkit';
import {postsSlice} from 'store/reducers/postsSlice';


export const store = configureStore({
  reducer: {
    posts: postsSlice
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
