import React, { Component } from 'react';

//botstrap
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//styled component
import styled from 'styled-components';


const Repair = styled.div `
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px; 
`

const WorkTime = styled.div `
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	} 
`

const Calls = styled.div `
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	} 
`

const CallsButton = styled.button `
	width: 176px;
	height: 48px;
	background-color: #3fc7db;
	border: none;
	border-radius: 30px;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
`

class Adres extends React.Component
{
	render(){
		return(
				<span>
					{this.props.addr}
				</span>
			)
	}
}

class TellNumber extends React.Component
{
	render(){
		return(
				<span>
					{this.props.tel}
				</span>
			)
	}
}

class Menu extends React.Component
{
	render(){
		return(
				<Row>
					<Col lg={3}>
						<Repair>
							Ремонт айфона в сервисном центре и на выезде
						</Repair>
					</Col>
					<Col lg={3} lgOffset={1}>
						<WorkTime>
							Пн-пт с 10 до 20, сб,вс с 11 до 18
							<Adres addr="Ленинская, 301" />
						</WorkTime>
					</Col>
					<Col lg={3}>
						<Calls>
							Пн-пт с 10 до 20, сб,вс с 11 до 18
							<TellNumber tel="8 (846) 922 55 44" />
						</Calls>
					</Col>
					<Col lg={2}>
						<CallsButton>
							Заказать звонок!
						</CallsButton>
					</Col>
				</Row>
			)
	};
}

export default Menu;