import React from 'react';

class JavascriptTest extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

tick(){
  this.setState({
    date: new Date()
  })
}


  componentDidMount(){
    console.log('Did Mount')
  this.timerId = setInterval(
    ()=> this.tick()
    ,1000)
  }

  componentWillUnmount(){
    console.log('Clear');
    clearInterval(this.timerId);
  }
  
  render(){

    return(
      <>
      <div style={{marginBottom: '40px'}}>Hi</div>
      <hr/>
      <h4>Hello World</h4>
      <h4>Time is: {this.state.date.toLocaleTimeString()} </h4>
      </>
    )
  }
}
export default JavascriptTest;