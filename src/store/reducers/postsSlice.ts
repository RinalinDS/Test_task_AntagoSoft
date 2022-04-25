import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {PostType} from 'types';

const initialState: Array<PostType> = [
    {
        id: v1(),
        name: 'Samuel Jackson',
        message: 'Hey Eva! You\'re cool. Nice pic!',
        date: '13 Apr 2022'
    },
    {
        id: v1(),
        name: 'Angela Deimon',
        message: ' Thanks for your services! We really liked the ocean view room.',
        date: '10 Apr 2022'
    },
    {
        id: v1(),
        name: 'Ronald Harris',
        message: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
        date: '8 Apr 2022'
    }]

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost: (state, action: PayloadAction<PostType>) => {
            state.unshift(action.payload)
        }
    }
})

export const postsSlice = slice.reducer

export const {addNewPost} = slice.actions