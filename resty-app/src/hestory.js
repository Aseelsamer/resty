import React from 'react';
import List from './list.js';


class History extends React.Component{
    constructor(props){
        super(props)
        this.state={
            method:'',
            url:'',
            body:{}
        }
    }

    render(){
        let queries= localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) :[];
        let items = queries.map((obj,index)=>{
            return <li key={index}>{JSON.stringify(obj)}</li>
        });
        return(
            <ul>
                <List>{items}</List>
            </ul>
        )
    }
}

export default History;