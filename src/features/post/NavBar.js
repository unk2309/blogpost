import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Grid,TextField, } from '@mui/material';
import { createBlogPost } from './postSlice';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';

export default function ButtonAppBar() {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false); 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const disableButton = Boolean(title) && Boolean(content) && Boolean(author)

    const postBlog = () => {
        
        if (disableButton) {
            console.log('yes');
            dispatch(createBlogPost({title, content, author}))
            setTitle('');
            setContent('');
            setAuthor('');
        }
    }

    // opening and closing of moddal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // modal starts here
    const newPostModal = <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width:'100%',
            }}>
                <Grid container sx={{ height: '100%', alignItems: 'center', justifyContent: "center",   }}>
                    <Grid item xs={12} sm={6} lg={4} sx={{border: '2px solid #000',boxShadow: 24,}}>
                        <Grid container>
                            <Grid item xs={12} sx={{ backgroundColor: 'white', px: 2 }} >
                                <Typography variant="h5" color="initial" sx={{fontWeight:500,my:1}}>
                                    Add New Post
                                </Typography>
                                <Box sx={{display:'grid'}}>
                                    <label>Post Title</label>
                                    <TextField sx={{my:1}} value={title} onChange={ (e) => setTitle(e.target.value) }/>
                                    <label>Post Authur</label>
                                    <TextField sx={{my:1}} value={author} onChange={ (e) => setAuthor(e.target.value) } />
                                    <label>Content</label>
                                    <TextField sx={{my:1}} value={content} onChange={ (e) => setContent(e.target.value) } />
                                    <Button color="inherit" variant='contained' sx={{mb:2}} onClick = {postBlog} disabled = {!disableButton} >add New Post</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </div>
    // modal ends here
    return (
        <>
             {/* navbar starts here */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,display:{xs:'none',sm:'flex'} }} >
                            Blog Post
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>add New Post</Button>
                    </Toolbar>
                </AppBar>
            </Box>
             {/* navbar ends here */}

            {newPostModal}
        </>
    );
}