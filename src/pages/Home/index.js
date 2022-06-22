/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header/index';
import Slide from '../../components/Slide/index';
import axios from 'axios';

import chip from "../../components/Chip";

import './styles.js';
import Chip from "../../components/Chip";

function Home() {

    const [chips, setChips] = useState([])


    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("ott/netflix", requestOptions)
            .then(response => response.json())
            //.then((result) => console.log(result))
            .then((result) => setChips(result.Data))
            .catch((error) => console.log("error", error));

    }, [])

    function pick() {
        console.log('You clicked chip!');
    }

    return (
        <Fragment>
            <Header/>
            <Slide/>
            <div onClick = {pick}>
                <Chip
                    title="???"
                    chips={chips}
                />
            </div>
        </Fragment>
    )
}

export default Home