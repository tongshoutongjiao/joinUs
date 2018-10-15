import React, { Component } from 'react';
import * as util from './util/utils';
import logo from './logo.svg';
import SharePage from './component/SharePage';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		util.calculate();
	}
	render() {
    return (
				<div>

					{/*	<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</div>*/}
					<SharePage/>
				</div>
    );
  }
}
export default App;
