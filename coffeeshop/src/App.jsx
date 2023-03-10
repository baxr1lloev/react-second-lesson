import './App.scss';
import ScreenFirst from './components/ScreenFirst';
import ScreenThree from './components/ScreenThree';
import ScreenTwo from './components/ScreenTwo';


const arr = [
  {
    id: 1,
    img: 'coffee-cup.webp',
    title: 'Solimo Coffee Beans 2 kg',
    price: 10.73,
    qt: 0,
  },
  {
    id: 2,
    img: 'coffee-cup-2.jpg',
    title: 'Solimo Coffee Beans 2 kg',
    price: 10.73,
    qt: 10,
  },
  {
    id: 3,
    img: 'coffee-cup-3.jpg',
    title: 'Solimo Coffee Beans 2 kg',
    price: 10.73,
    qt: 0,
  }
]


function App() {
  return (
    <div className="App">
     <ScreenFirst></ScreenFirst>
     <ScreenTwo></ScreenTwo>
     <ScreenThree data={arr} ></ScreenThree>
    </div>
  );
}

export default App;
