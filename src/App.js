import './App.css';
import Card from './components/Card';
import Grid from './components/Grid';
import Nav from './components/Nav';
import nina from './img/nina.jpg'
import junior from './img/junior.jpg'
import nicole from './img/nicole.jpg'

const info = [
  {
    id: 1,
    src: nina,
    name: 'Ninnah',
    age: 7
  },
  {
    id: 2,
    src: nicole,
    name: 'Junior',
    age: 5
  },
  {
    id: 3,
    src: junior,
    name: 'Nicole',
    age: 12
  }
]

function App() {
  const madocho = info.map(item => {
    return <Card src={item.src} name={item.name} age={item.age} key={item.id} />
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
