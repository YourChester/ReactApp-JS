import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//botstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstname: null, lasttname: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  }

  handleSubmit(event) {
    alert('Hello ' + this.state.lasttname + ' ' + this.state.firstname);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="firstname" onChange={this.handleChange} />
          Surname:
          <input type="text" value={this.state.value} name="lasttname" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
