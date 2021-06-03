import React, { Component } from "react";
import Hello from "./Hello";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Dropmenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  onSelect (option) {
    console.log('You selected ', option.label)
    console.log('You selected ', option.value)
    //this.setState({selected: option})
  }

  render() {
    const options = [
    //   { value: "one", label: "One" },
    //   { value: "two", label: "Two", className: "myOptionClassName" },
    //   { value: "three", label: "Default" }
    <table>
    <tr>
        <td>Coupling</td>
        <td>VR1029-400</td>
        <td>Other</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Clampy Assy</td>
        <td>VR1025-350</td>
        <td>Other</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Bolt</td>
        <td>ST1420-08</td>
        <td>Pratty & Whitney</td>
        <td>7</td>
    </tr>
    {/* <tr>
    <td>Sensor Temp oil</td>
        <td>RP221-00</td>
        <td>Auxitrol</td>
        <td>3</td>
        <td>Dec 05, 2021</td>
        <td>Nov 27,2021</td>
    </tr>
    <tr>
        <td>Sensor Temp oil</td>
        <td>RP221-00</td>
        <td>Auxitrol</td>
        <td>3</td>
        <td>Nov 21, 2021</td>
        <td>Apr 26,2021</td>
    </tr> */}
</table>
    ];

    const defaultOption = options[3];

    return (
      <div>
        <Dropdown
          options={options}
          onChange={(o)=> this.onSelect(o)}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    );
  }
}
export default Dropmenu;
// render(<App />, document.getElementById("root"));
