import React, { Fragment } from 'react'
import { Container, Card, Title } from "./styles";

const Chip = ( {title, chips} ) =>(
    <Fragment>
        <div className="section-chips">
            <Title>{title}</Title>
            <Container>
                
            {chips.map((chip) => {
                return (
                    <Card key={chip.KinoId}>
                        <img
                            src={chip.Poster}
                            alt={chip.TitleEn}
                            title={chip.TitleKr}>
                        </img>

                        <div style={{display: 'none'}} className="description">
                            <h4>{chip.TitleKr}</h4>
                            <div className="overview">
                                <p>{chip.Info}</p>
                            </div>
                            <p className="date">{chip.Year}</p>
                            {/*{ console.log( chip.OttLinks[0].Ott ) }*/}
                        </div>
                    </Card>
                )
            })}

            </Container>
        </div>
    </Fragment>
);

export default Chip;