import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios'

const postAdapter = createEntityAdapter({
    sortComparer: ( a, b ) => a.id - b.id
})

const initialState = postAdapter.getInitialState({
    status : 'idle',
    eroor : null
});

export const fetchAllPost = createAsyncThunk(('post/saveBlogPost'), async()=>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return[...response.data]

    } catch (error) {
        console.log(error.message);
        
    }
})

export const createBlogPost = createAsyncThunk(('post/createBlogPost'), async(details)=>{
    try {
        const response = await axios.post('http://localhost:4000/post/newpost',details);
        return response.data
    } catch (error) {
        console.log(error.message);
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewPost : {
            reducer (state,action) {
                state.post.push(action.payload)
            },
            prepare (title, content, author) {
                return (
                    {
                        payload : {
                            title,
                            content,
                            author
                        }
                    }
                )
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllPost.pending, (state, action)=>{
                state.status = 'loading'
            }) 
            .addCase(fetchAllPost.fulfilled, (state, action)=>{
                state.status = 'succedded'
                const loadedPosts = action.payload
                postAdapter.upsertMany(state, loadedPosts)
            }) 
            .addCase(fetchAllPost.rejected, (state, action)=>{
                state.status = 'failed'
            })
            .addCase(createBlogPost.fulfilled, (state, action)=>{
                //state.post = action.payload;
                // const loadedPosts = action.payload
                // state.post = state.post.concat(loadedPosts)
            })
    }
})

export const { addNewPost } = postSlice.actions

export const {
    selectAll : allPost,
} = postAdapter.getSelectors(state => state.post)

export const status = (state) => state.post.status

export default postSlice.reducer