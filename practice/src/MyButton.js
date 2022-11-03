import React from 'react';

class MyButton extends React.Component {
    state = {
        a: 5,
        b: 10,
        c: 15
    };

    render() {
        return  (
            <button onClick={this.handleClick}>click me</button>
        );
    }
  
    handleClick = () => {
        this.setState({
            a: 20,
            c: 25
        }, ()=>{ console.log(this.state)});
    }
}
export default MyButton;