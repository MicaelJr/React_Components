import React, { Fragment, useState, useEffect } from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionLink from '../../shared/description_link';

import { Link } from 'react-router-dom'

const Planet = (props) => {
    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }
    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />                       
        </div>
    );
}


export default Planet;