import React,{Component} from 'react';
class DisplayUser extends Component {
    
    render() { 
        return ( 
            
                <tr>
                    <td><img src={this.props.imageUrl} height="50" width="50"/></td>
                    <td>{this.props.id}</td>
                    <td>{this.props.vote}</td>
                    <td>{this.props.title}</td>                    
                    <td>{this.props.description}</td>                    
                </tr>
          
         );
    }
}
 
export default DisplayUser;