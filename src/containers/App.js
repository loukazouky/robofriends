import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
//PROPS reads the properties that it receives and render something.
//PROPS can never change
//STATE is an object that describes your application 
//STATE are able to change

//This is part of containers, / smart containers
//they have state in them with lifecycle hooks
//class sytax aswell
//not a pure functions
class App extends Component {
	constructor() {
super() //calls the constructor of the component
this.state = { //STATE can be change thus this becomes important to pass onto child
	robots: [],
	searchField: ''
	}
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({ robots: users})});
}

onSearchChange = (event) => {
	this.setState({ searchField: event.target.value })
}

render() {
	const { robots, searchField } = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
	 return !robots.length ? // '?' alternative if statement
		<h1 className='tc'>Loading</h1> : // ':' alternative return statement
	(
			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/> 
			<Scroll> 
			<CardList robots={filteredRobots} /> 
			</Scroll>
			</div>
		);
	}
}

export default App;