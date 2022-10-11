import React from "react";

export default class Welcome extends React.Component {
    myName = "Max"
    ternaryOperator = () => {
        //&&
        if (true) {
            // With && symbol, we doesnt care about else statment. We only cares about "if" 
        }
        // ? :
        if (true) {
            // With ternary operator ? : symbol, we care about if and else statements.
        } else {

        }
    }
    render() {
        return (
            <div>
                {console.log(this.props) /* To check what kind of props are sent from the parent */}
                <h1>{this.props.myInfo && this.props.myInfo.age}</h1> {/* Check if object exists before accessing its attribute otherwise it will result in error*/}
                {this.props.myInfo ? <h1>{this.props.myInfo.firstName}</h1> : ""}
                <h1>{this.props.myInfo?.firstName}</h1> {/* ? symbol is to check if myInfo object is null or not */}
                <h2>{this.props.name}</h2>
                {this.props.children /* props.children is for displaying all html code when between the oen and close tag when calling the component as in App.js */}
                {this.props.method && this.props.method()} {/* The same here. You have to check if a method exists before executing it */}
                {this.props.addFunction && this.props.addFunction(10, 3)}
                {this.props.addFunction && this.props.addFunction(12, 3)}
                {this.props.addFunction && this.props.addFunction(11, 5)}






                {/* this.props.name && <h1>Welcome {this.props.name}</h1> */}
                {/* this.props.age && this.props.name ? <h2>Age: {this.props.age}</h2> : <h2>Age: unkown</h2> */}
                {/* this.props.age && <h2>Age: {this.props.age}</h2>  */}
                {/* this.props.hairColor */}
            </div>
        )
    }
}
