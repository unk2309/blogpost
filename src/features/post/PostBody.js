import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { allPost } from './postSlice'
import Card from './Card'
const PostBody = () => {

    const allUserPost = useSelector(allPost)
  return (
    <>
    {
    <Grid container sx={{justifyContent:'center'}}>
        <Grid item xs={12} sm={6} lg={4}>
            <Card />
        </Grid>
    </Grid>
    }
    </>
  )
}

export default PostBody