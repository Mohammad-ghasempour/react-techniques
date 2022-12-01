import React from 'react';

export class LearnLifeCycles extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      color: 'blue',
      show: true
    }
    console.log('Constructor')
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps')
  //   return {}
  // //return { color: props.color}
  //   }


    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          color: 'red'
        })
      },2000)
    }

shouldComponentUpdate(){
  console.log('shouldComponentUpdate')
  return true
}

getSnapshotBeforeUpdate(prevProps , prevState){
    return this.div1 = <p>the favorite color before update was : {prevState.color}</p>
 }
componentDidUpdate(){
  this.div2 = <p>the favorite color after update is : {this.state.color}</p>
  }

changeColor = ()=>{
   this.setState({color: 'gray'});
   console.log(this.state.color)
}
deleteHandler = ()=>{
  this.setState({show: false})
}
  render() {
    const description = <Description/>
    console.log('Render')
    return (
      <>
      <hr/>
      <p>My favorite color is:<span style={{color: `${this.state.color}`}}> {this.state.color} </span></p>
      <button onClick={this.changeColor}>Change Color</button>
      {this.state.show ? description : null}
      <button onClick={this.deleteHandler}>Delete description</button>

    <div>
      <h3>before update: {this.div1}</h3>
      <h3>after update: {this.div2}</h3>
    </div>
      </>

    );
  }
}


class Description extends React.Component{
  componentWillUnmount(){
    console.log('you Deleted this description!')
  }

  render(){
    return <h3>Description in this article!!!</h3>
  }
}