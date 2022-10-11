import React, { Fragment } from "react";
import Welcome from "./components/welcome/Welcome";

class App extends React.Component {
  myName = "Omar"
  myInfo = {
    firstName: "Alex",
    lastName: "Andersson",
  }

  method = () => {
    console.log("From App.js method");
  }
  add = (a, b) => {
    console.log("Here is an add function in App.js");
    return (
      <h1>{a + b}</h1>
    )
  }

  render() {
    return (
      <Fragment>
        {/* We send props as a html arrtidubtes */}
        <Welcome
          name="Ediz"
          age="44"
          hairColor="Brown" /* The name of the props can be whatever */
          myInfo={this.myInfo}
          method={this.method /* When sending method, we only send a reference to the method. DONT include ()  */}
        />
        <Welcome myInfo={this.myInfo} addFunction={this.add} />

        <Welcome>
          <div className="children">
            <p>Welcome to Grit man!</p>
          </div>
        </Welcome>

        {/*      <Welcome name={this.myName}></Welcome>
        <Welcome/> */}

      </Fragment>
    )
  }
}

export default App;