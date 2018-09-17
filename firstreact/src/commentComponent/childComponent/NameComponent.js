import React from 'react';
class NameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                Name: {this.props.name}
            </div>
        );
    }
}

export default NameComponent;