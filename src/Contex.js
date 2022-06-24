// context
// useContext

// context -> Ek warehouse jahan data store hai
// provider -> data ko public tak pauchane wla (delivery boy)
// consumer -> jo data consume krega

// For simplicity we use useContext hooks for making consumer merthod 


import React, { useContext, useEffect, useState } from "react";


// const API_URL = `http://www.omdbapi.com/?apikey=2247867f&s=titanic`
// const API_URL = `https://jsonplaceholder.typicode.com/posts`
const AppContext = React.createContext();

// we need to create a provider
const AppProvider = ({ children }) => {
    const [isLodaing, setIsLodaing] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const getMovies = async () => {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`);
            const data = await res.json();
            console.log(data);
            setMovie(data.Search)
            // if (data.Response === true) {
            //     setIsLodaing(false)
            //     setMovie(data.Search)
            // } else {
            //     setIsError({
            //         show: true,
            //         msg: data.error
            //     })
            // }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovies()
    }, [])

    return <AppContext.Provider value={{ isLodaing, movie, isError }}>{children}</AppContext.Provider>
}

// creating custom hooks

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };