import './App.css';

import {Route, Routes} from 'react-router-dom'


import Header from './components/Header';
import Home from './pages/Home/Home';
import SelectDifficulty from './pages/SelectDifficulty/SelectDifficulty';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/selectdifficulty' element={<SelectDifficulty/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
