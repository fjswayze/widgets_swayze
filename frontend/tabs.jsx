import React, { useState } from 'react'

export default function Tabs(props){
    const [index, setIndex] = useState(0); 
    return(
        <div>
        <h1>Tabs</h1>
        <div className='tabs'>
            <div className='header'>
                {props.tabs.map((tab, idx) => {
                    if(idx === index){
                        return (<div className='active-tab' onClick={() => setIndex(idx)}>{tab.title}</div>)
                    } else{
                        return (
                            <div className='tab' onClick={() => setIndex(idx)}>{tab.title}</div>
                        )
                    }
                })}
            </div>
            <div className='open-tab'>
                {props.tabs[index].body}
            </div>

        </div>
       </div>
    )
}