import * as React from 'react';
import { Component, useState } from 'react';

import {OpenSourcePropsList} from '../../interface/data'
import '../../../styles/home/me-opensource.scss'

interface OpenSourceProps {
    emoji: any,
    title: string,
    new?: boolean
}

const OpenSourceList = () => {
    const IOpenSource: React.FC<OpenSourceProps> = (props: OpenSourceProps) => {  
        return ( 
            <a>
                <div className = "opensource-container">
                    <p className = "opensource-container-img">{props.emoji}</p>
                    <p className = "opensource-container-text">{props.title}</p>
                    {props.new ? <div className = "opensource-container-new">New</div> : false}
                </div>
            </a>
        );
    };
    
    const getOpenSource = () => {
        return OpenSourcePropsList.map((item, k) => {
            return (
                <IOpenSource key={k} {...item} />
            )
        })
    }

    return (
        <div className="opensource-box">
            {getOpenSource()}
        </div>
    ); 
}

export default OpenSourceList;
