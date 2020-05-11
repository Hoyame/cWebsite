import * as React from 'react';
import { Component, useState } from 'react';

import './me-opensource.scss'

export interface OpenSourceProps {
    emoji: any,
    title: string,
    new?: boolean
}

const OpenSourcePropsList : OpenSourceProps[] = [
    { emoji: "💌", title: "OC Projet 1", new: true },
    { emoji: "🤣", title: "OC Projet 2" },
    { emoji: "😅", title: "OC Projet 3" },
]

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
