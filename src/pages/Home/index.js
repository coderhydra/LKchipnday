import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header/index';
import Movie from '../../components/Movie';
import Slide from '../../components/Slide/index';
import axios from 'axios';

import './styles.js';

function Home() {

    const API_KEY = '20d0453e2b57cb10e3203c454698e785'
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const response = await axios.get(API_URL)

        setMovies(response.data.results)
    }

    useEffect(() => {
        getMovies()
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("all", requestOptions)
            .then(response => response.json())
            .then((result) => console.log(result.Data))
            // .then((data) => console.log(data))
            .catch((error) => console.log("error", error));



    }, [])

    return ( 
        <Fragment>
            <Header/>
            <Slide/>
            <Movie
                title="Assista a seguir"
                movies={movies}
            />
        </Fragment>
    ) 
}

export default Home