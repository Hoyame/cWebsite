import * as React from 'react';
import { Component, useState } from 'react';

import '../../styles/home/opensource.scss'

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
    
 

    return (
        <div className="opensource-box">
            
        </div>
    ); 
}

export default OpenSourceList;
