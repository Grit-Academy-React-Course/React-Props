import React from "react";

export default class LuckyNumber extends React.Component {
    render() {
        return (
            <div>
                {this.props.getRandomNumber(10)}
                {this.props.getRandomNumber(100)}
                {this.props.getRandomNumber(1000)}
                {this.props.children}
            </div>
        )
    }
}