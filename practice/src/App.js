import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <div> Learn React </div><br/><hr/>
      
      <Clock city={"Tehran"}/>
      <Clock city={"Stavanger"}/>
      <Clock city={"NewYork"}/>
    </div>
  );
}

export default App;
