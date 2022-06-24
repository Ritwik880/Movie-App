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
import { NavLink } from 'react-router-dom';

const Wrapper = styled("div")(({ theme }) => ({
    height: 'auto',
    background: '#dff9fb',

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
                <div className="container grid grid-4-col">
                    {
                        movie.map((curMovie, index) => {
                            const { imdbID, Title, Poster } = curMovie;
                            const movieName = Title.substring(0, 15);
                            return <NavLink to={`movie/${imdbID}`} key={index}>
                                <div className="card">
                                    <div className="card-info">
                                        <h2>
                                            {movieName.length > 15 ? `${movieName}...` : movieName}
                                        </h2>
                                        <img src={Poster} alt={imdbID} />
                                    </div>
                                </div>
                            </NavLink>
                        })
                    }

                </div>
            </Wrapper>

        </>
    )
}

export default Movie