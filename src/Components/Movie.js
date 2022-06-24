import React, { useEffect } from 'react'
import { useGlobalContext } from '../Contex';
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom';
import Search from './Search'
import { Rings } from 'react-loader-spinner'
const Wrapper = styled("div")(({ theme }) => ({
    height: 'auto',
    background: '#dff9fb',

}));
const Spinner = styled("div")(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'

}));


const Movie = () => {
    const { movie, isLodaing, setIsLodaing } = useGlobalContext();
    useEffect(() => {
        if (isLodaing) {
            setTimeout(() => {
                setIsLodaing(false);
            }, 6000);
        }
    }, [isLodaing]);
    return (
        <>
            <Wrapper>
                <Search />
                {
                    !isLodaing ?
                        <div className="container grid grid-4-col">
                            {
                                movie && movie.map((curMovie, index) => {
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

                        </div> : <Spinner>
                            <Rings ariaLabel="loading-indicator" width={500} height={500} />
                        </Spinner>
                }
            </Wrapper>

        </>
    )
}

export default Movie