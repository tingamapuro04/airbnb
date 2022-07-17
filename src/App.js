import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';
import Nav from './components/Nav';
import List from './components/elements';



function App() {
  const madocho = List.map(item => {
    return <Card src={item.img} name={item.title} age={item.stats.rating} key={item.id}  openSpots={item.openSpots} location={item.location}/>
  })
  return (
    <div className="App">
      <Nav />
      <Grid />
      <div className="Cards">
        {madocho}
      </div>
    </div>
  );
}

export default App;
