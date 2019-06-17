import React from 'react';

export default class Filter extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return (
        <div>
        Filter: <input type="text" className={'filter'} onChange={(event)=>this.props.filterByName(event.target.value)}/>
        </div>
    );
}

}