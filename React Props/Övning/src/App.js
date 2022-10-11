import React, { Fragment } from "react";
import Car from "./components/car/Car";
import LuckyNumber from "./components/luckyNumber/LuckyNumber";

class App extends React.Component {
  ownerInfo = {
    firstName: "Alex",
    surName: "Svensson",
    age: 29
  }

  getRandomNumber = (maxNumber) => {
    let randomNumber = Math.floor(Math.random() * maxNumber)
    return (
      <h2>My lucky random number is {randomNumber}</h2>
    )
  }

  render() {
    return (
      <Fragment>
        <Car name="Volvo" Model="2022" color="Red" condition="new" hasInsurance></Car>
        <Car name="BMW" Model="2021" color="Brown" condition="used"></Car>
        <Car name="Saab" Model="1950" color="Black" condition="used" ownerInfo={this.ownerInfo}></Car>

        <LuckyNumber getRandomNumber={this.getRandomNumber}>
          <p>This is children html data</p>
        </LuckyNumber>
      </Fragment>
    )
  }
}

export default App;