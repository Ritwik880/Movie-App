// context
// useContext

// context -> Ek warehouse jahan data store hai
// provider -> data ko public tak pauchane wla (delivery boy)
// consumer -> jo data consume krega

// For simplicity we use useContext hooks for making consumer merthod 


import React, { useContext, useEffect, useState } from "react";


const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = React.createContext();

// we need to create a provider
const AppProvider = ({ children }) => {
    const [isLodaing, setIsLodaing] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState('titanic');
    const [refreshlist, setRefreshList] = useState(false);
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLodaing(false);
                setMovie(data.Search);
            }
            else {
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovies(`${API_URL}&s=${query}`);
        setRefreshList(false);
    }, [query, refreshlist])

    return <AppContext.Provider value={{ isLodaing, movie, isError, query, setQuery, setRefreshList }}>{children}</AppContext.Provider>
}

// creating custom hooks

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };