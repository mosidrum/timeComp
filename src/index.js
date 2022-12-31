import React from 'react';
import ReactDOM from 'react-dom';
import './time.css'


class Clock extends React.Component {

	state = {time: new Date().toLocaleTimeString () };

	componentDidMount(){
	     setInterval(() =>{
		this.setState({time: new Date().toLocaleTimeString() })

	 }, 1000)
	}

	render(){

	return (
	    <div className = 'time'>
		<h1>The time is: {this.state.time}</h1>
	    </div>
	  );
	}

}

ReactDOM.render(<Clock />, document.querySelector('#root'))