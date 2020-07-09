import React from 'react';
import './card.styles.css';
//import img01 from './img/img01.jpg' // relative path to image 

export const Card = (prop1) => (
    <div className='card-container'> 
        <h3> {prop1.cardProp2.name} </h3>
        {/* ---my pics--- */}
        <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            alt={`Pic ${prop1.cardProp2.id}`} 
            title={`Image ${prop1.cardProp2.id}`}
        />
        <h4> email: </h4>
        <span>{prop1.cardProp2.email}</span>
        {/* 
        {/*---origin pics---
        <img src={ require(`./img/img${prop1.cardProp2.id}.jpg`)} 
            alt={`Pic ${prop1.cardProp2.id}`} 
            title={`Image ${prop1.cardProp2.id}`}
        />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set4&size=180x180`} alt="pic 03"/>
        <img src={ require('./img/min/img02.jpg')} alt={"pic 02"} />
        <img title={"Image 01"} src={img01} alt={"pic 01"} />
        <img src={`https://robohash.org/${prop1.cardProp2.id}?set=set3`} alt="pic 03"/>
        */}
    </div>
);