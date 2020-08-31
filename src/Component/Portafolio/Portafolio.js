import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portafolio.css';

function Portafolio() {

    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backend-portafolio-alan.herokuapp.com/Portafolio')
            .then(
                res => setProjects(res.data)
            )
    }, [setProjects])

    return (
        <>
            <div className="Card-portafolio">
                {projects.length > 0 && projects.map((project, index) =>
                    <div>
                        <h1>{projects.name}</h1>
                        <img className="imagen-proyecto" alt="imagen-projecto" src={project.image} ></img>
                        <p>{project.description}</p>
                        <a className="boton-isitar" href={project.link}>Visitar Proyecto</a>
                    </div>
                )}
            </div>
        </>
    )
};

export default Portafolio;