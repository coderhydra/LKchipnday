import React from 'react';

import { Slider } from "./styles";

const Slide = () =>(
    <Slider>
        <ul className="slider">
            <li className="slider-item">
                <img src="https://m.media-amazon.com/images/M/MV5BMjA4MzQ2ODE2M15BMl5BanBnXkFtZTcwNzk0MTUzNA@@._" alt="" title="" />
                <div className="controls">
                    <div className="arrow arrow-prev"></div>
                    <div className="arrow arrow-next"></div>
                </div>
            </li>

            <div className="controls-round">
                <div className="controls-round-item"></div>
            </div>
        </ul>
    </Slider>
);

export default Slide;