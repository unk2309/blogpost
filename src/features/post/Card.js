import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { allPost } from './postSlice'

const Card = () => {

    const matches = useMediaQuery('(max-width:480px)');

    const allUserPost = useSelector(allPost)

    return (
        <>
            {
                allUserPost.map((eachPost) => (
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={matches? 'h5' : 'h4'} color="initial">
                                {eachPost.title}
                            </Typography>
                            <Typography variant="body1" color="initial">
                            {eachPost.body}
                            </Typography>
                            <Typography variant="body2" color="initial">

                            </Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default Card