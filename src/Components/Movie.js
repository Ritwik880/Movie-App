import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Contex';
import { styled, Typography, Grid, alpha } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Wrapper = styled("div")(({ theme }) => ({
    height: 'auto',
    background: '#dff9fb',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const Movie = () => {
    const { movie } = useGlobalContext();
    const [serachValue, setSerachValue] = useState('')
    // const { id } = useParams();
    // const [setData, setSetData] = useState([]);
    // const getData = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await res.json();
    //         console.log(data);
    //         setSetData(data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getData();
    // }, [])
    const handleChange = (e) => {
        console.log(e.target.value);
        setSerachValue(e.target.value)
    }

    return (
        <>
            <Wrapper>
                <Typography textAlign='center' variant='h2'>
                    Movies
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                        value={serachValue}
                    />
                </Search>
                <div className="row m-2">
                    {
                        movie.map((curMovie, index) => {
                            return (

                                <Grid container spacing={4} key={index}>
                                    <Grid item sm={6} lg={4} md={4}>
                                        <Card style={{ minHeight: 225 }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        {
                                                            curMovie.Title
                                                        }
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title="Shrimp and Chorizo Paella"
                                                subheader={curMovie.Year}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={curMovie.Poster}
                                                alt="poster"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    This impressive paella is a perfect party dish and a fun meal to cook
                                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                                    if you like.
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    <ShareIcon />
                                                </IconButton>
                                            </CardActions>
                                        </Card>

                                    </Grid>

                                </Grid>
                            )

                        })
                    }
                </div>

            </Wrapper>

        </>
    )
}

export default Movie