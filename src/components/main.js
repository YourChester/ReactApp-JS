import React, { Component } from 'react';

//botstrap
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//styled component
import styled from 'styled-components';


const Repair = styled.div `
	color: #fff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;

	span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`

const LightText = styled.div `
	color: #fff;	
	font-weight: 300;
	line-height: 28px;
	font-size: 18px;
	margin-top: 54px;
`

const CallsButton = styled.button `
	width: 247px;
	height: 67px;
	margin-top: 32px;
	background-color: #ffa14b;
	border: none;
	border-radius: 30px;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
`

class Main extends React.Component
{
	render(){
		return(
				<Row>
					<Col lg={5}>
						<Repair>
							Качественный ремонат
							<span> iphone за 35 минут и гарантия на 1 год</span>
						</Repair>
						<LightText>
							Оставте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 публей, с установкой в подарок!
						</LightText>
						<CallsButton>
							Отправить заявку!
						</CallsButton>
					</Col>
					<Col lg={6} lgOffset={1}>

					</Col>
				</Row>
			)
	};
}

export default Main;