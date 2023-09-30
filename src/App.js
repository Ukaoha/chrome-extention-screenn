import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import SignUp from './Pages/SignUp/SignUp';
import RecordedVideo from './Pages/RecordedVideo/RecordedVideo';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<SignUp />} /> 
        <Route path='recordedvideo' element={<RecordedVideo/>} /> 

      
      </Routes>

    </div>
  );
}

export default App;
