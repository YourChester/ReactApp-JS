import React, { Component } from 'react';
import './App.css';
//botstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//steled-components
import styled from 'styled-components';
//components
import Header from './components/heade';
import Menu from './components/menu';
import Main from './components/main';


const bg = process.env.PUBLIC_URL + '/img/bg.png'

const HeaderWrapper = styled.header `
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div `
  height: 89px;
  padding: 20px;
`

const MainWrapper = styled.main `
  height: 600px;
  padding-top: 130px;
  background: url(${bg}) no-repeat;
  background-size: cover;
`

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header/>
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
