import React, { Component } from 'react';
import '../style.css';


export class User extends Component{
  render(){
    let {user} = this.props;
    return(
      <a href={user.html_url} target="_blank"  class="user-details">
        <span>{user.login}</span>
        <img src={user.avatar_url} alt="img error" />
      </a>
    );
  }
}