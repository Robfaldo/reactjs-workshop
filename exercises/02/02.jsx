/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
*/
import React from 'react';

// Exercise 02/02
// ===========
//
// This is a slight extension of exercise 02/01, but this time we will
// convert our input to become a "controlled" component.
//
// Tasks
// --------
// ✅    Create the exact same functionality as in 02/01
// ✅    Your <input /> component should now be a "controlled" component
//
// ⭐️    Add a button component that when clicked updates the state to a
//        given team name. You are free to choose the team name.
//      When clicked, both the input and text display should render your
//        chosen team name.
//
// Tips
// ------
// 🐨     You can COPY your solution from Exercise 02/01 as a starting point!
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      team: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({team: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <div>
          Teamname: <input value={this.state.team} onChange={this.handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="input-text"></input>
        <div>
          Submitted Team: {this.state.team}
        </div>
      </div>
    );
  }
}

export default App;
