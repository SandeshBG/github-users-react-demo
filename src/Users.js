import React, { Component } from 'react';
import axios from 'axios';
import {User} from './User';
import '../style.css';

export default class Users extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[]
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/users')
    .then(res => {
      this.setState({users:res.data});
    });
  }

  render(){
    return(
      <div class="user-list">
      {
        this.state.users.map(
          user => <User user={user} />
        )
      }
      </div>
    )
  }
}