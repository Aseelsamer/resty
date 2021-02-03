import React from 'react';
import ReactJson from 'react-json-view';

const Results =(props)=>{
        return(
            <div>
            <div>
                <ReactJson name="headers" src={props.data.headers} />
                <ReactJson name="response" src={props.data.body} />

            </div>
        </div>
        )
    }

export default Results;