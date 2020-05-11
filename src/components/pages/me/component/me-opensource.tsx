import * as React from 'react';
import { Component, useState } from 'react';

import OpenSourcePropsList from '../../../data/me/opensource'
import './me-opensource.scss'

export interface OpenSourceProps {
    emoji: any,
    title: string,
    new?: boolean
}

const IOpenSource: React.FC<OpenSourceProps> = (props: OpenSourceProps) => {  
    return ( 
        <div>
            <a>
                <div className = "opensource-container">
                    <p className = "opensource-container-img">{props.emoji}</p>
                    <p className = "opensource-container-text">{props.title}</p>
                    {props.new ? <div className = "opensource-container-new">New</div> : false}
                </div>
            </a>
        </div>
    );
};

const getOpenSource = () => {
    return OpenSourcePropsList.map((item, k) => {
        return (
            <IOpenSource {...item} />
        )
    })
}

class OpenSourceList extends Component {
    render() {
        return (
            <div className="opensource-box">
                {getOpenSource()}
            </div>
        );
    }
}

export default OpenSourceList;
