import React from "react";

class Car extends React.Component {

    render() {
        return (
            <div>
                <h1>The car {this.props.name} has the color {this.props.color} and model {this.props.model}.
                    It is in a {this.props.condition} condition
                    {this.props.hasInsurance ? " and has insurance." : "."}
                </h1>
                {this.props.ownerInfo && <h1>Welcome {this.props.ownerInfo.firstName} {this.props.ownerInfo.surName} </h1>}
            </div>
        )
    }
}

export default Car;