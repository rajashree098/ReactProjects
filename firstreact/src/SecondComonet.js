import React from 'react'

class SecondFriend extends React.Component {
    render() {
        return (   
            <div>         
                <div >
                    Hello {this.props.children}  from {this.props.profession}
                </div>          
                
            </div>
        );
    }
}

export default SecondFriend;