import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { Country } from './page/Country/Country';
import { Destination } from './page/Destination/Destination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:name/:id' element={<Country/>}/>
        <Route path='/:countryName/:countryId' element={<Destination/>}/>
      </Routes>
    </div>
  );
}

export default App;
