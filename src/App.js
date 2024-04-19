import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/'>
            <Routes>
              <Route index element={<Header/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
