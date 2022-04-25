import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionLink from "../shared/description_link";
import Form from "../planet/form";

import { useParams, useNavigate, Navigate } from 'react-router-dom'


//metodo para chamar a API
async function getPlanet(id){
    if (!id) return Promise.reject('Não consta ID')
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data =  await response.json()
    return data;
}


const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({});
    const [redirect, setNavegate] = useState(false);
    let { id } = useParams();
    let navigation = useNavigate();

    useEffect(() =>{
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data']);
        }, error => {
            setNavegate(true);
        })
    }, [])

    const goToPlanets = () => {
        navigation('/');
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    let title;
    if (planet.title_with_underline) {
        title = <h4><u>{planet.name}</u></h4>
    } else {
        title = <h4>{planet.name}</h4>
    }

    if (redirect) {
       return <Navigate to='/'/>
    }
    return (
        <div>
            {title}
            <DescriptionLink description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray} />
            <h4>Satélites</h4>
            <hr />
            <Form addSatellite={addSatellite}/>
            <hr />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type="button" onClick={goToPlanets}> Voltar a listagem </button>
        </div>
    );
}


export default Planet;