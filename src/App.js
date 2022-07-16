import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';
import Nav from './components/Nav';
import nina from './img/nina.jpg'
import junior from './img/junior.jpg'
import nicole from './img/nicole.jpg'

function App() {
  return (
    <div className="App">
      <Nav />
      <Grid />
      <div className="Cards">
        <Card src={nina}/>
        <Card src={junior}/>
        <Card src={nicole}/>
      </div>
    </div>
  );
}

export default App;
