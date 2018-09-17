import React from 'react';
//import "./index.css"
class Name extends React.Component {
    render() { 
        let namecolor = {
            color : this.props.color,
            backgroundColor: this.props.bcolor,
            float:"left",
            margin:"2px",
            border:"2px solid red",
            borderRadius:"5px"
        }
        return ( 
            <div style= {namecolor}>
              <h1>  {this.props.children}</h1>
                </div>
         );
    }
    
}
 
export default Name;