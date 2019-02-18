import React, {Component} from 'react';
import "./app.less"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 }
  }

  add = () => {
    // console.log(process.env.BUILD_ENV)
    
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Click Add</button>
      </div>
    )
  }
}