import { React, useEffect } from 'react'
import NavBar from './NavBar'
import PostBody from './PostBody'
import { fetchAllPost } from './postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { allPost,status } from './postSlice'
import axios from 'axios'



const AllPost = () => {
    
    const dispatch = useDispatch()
    dispatch(fetchAllPost())
    
    return (
        <>
            <NavBar />
            <PostBody />
        </>
    )
}

export default AllPost