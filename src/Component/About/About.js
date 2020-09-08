import React, { useState, useEffect } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './About.css'

function About() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://backend-portafolio-alan.herokuapp.com/About')
            .then(
                res => setInformation(res.data[0])
            )
    }, [setInformation]);

    return (
        <div className="About">
            <Container maxWidth="sm">
                <Card variant="outlined">
                    <CardContent maxWidth="sm">
                        <div className="div-foto">
                            <img className="foto-perfil" alt="FotoPerfil" src={information.photo}></img>
                        </div>
                        <div className="Descripcion">
                            <h1>{information.name}</h1>
                            <h2>{information.profession}</h2>
                            <p>{information.about_me}</p>
                            <ul className="skills">
                                {information.skills && information.skills.map((skill, index) =>
                                    <Button size="small" color="primary">
                                        <p className="skill">{skill}</p>
                                    </Button>
                                )}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
};

export default About;