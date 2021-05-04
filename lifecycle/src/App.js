import React from "react";
import axios from "axios";
import './App.css';
import UserInfo from "./userInfo";

class App extends React.Component {
  state = {
    user: {},
    followers: [],
  }

  componentDidMount(){
    
      axios.get("https://api.github.com/users/willmoon19")
      .then(res => {
        this.setState({
          user: res.data
      })
    })
      .catch(err => {
        console.log(err)
      })

      axios.get("https://api.github.com/users/willmoon19/followers")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
};

  onChange = (e) => {
    
  }

  render(){
    return (
      <div>
        <h1>Hello</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type="text"/>
          <button>Submit</button>
        </form>
        <UserInfo info={this.state.user} />
      </div>
    );
  }
}

export default App;
